import User from '../models/user';
import { hashPassword, comparePassword } from '../helpers/auth';
import jwt from 'jsonwebtoken';
import { nanoid } from 'nanoid';

export const register = async(req, res) => {
    // console.log(`Register end point => ${JSON.stringify(req.body)}`);
    const { name, email, password, secret } = req.body;

    if(!name) {
        return res.json({
            error: "Name is required"
        });
    }

    if(!password || password.length < 6) {
        return res.json({
            error: "Password is required and should be at least 6 characters"
        });
    }

    if(!secret) {
        return res.json({
            error: "Answer is requried"
        });
    }
    
    const exist = await User.findOne({ email });

    if(exist) {
        return res.json({
            error: "Email is taken"
        });
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        secret,
        username: nanoid(6)
    });

    try {
        await user.save();
        return res.json({
            ok: true
        });
    } catch(e) {
        console.log("Error registering user: ", e);
        return res.status(400).send('Error. Try again.')
    }
};

export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});

        //Check for user
        if(!user) {
            return res.json({
                error: "No user found."
            });
        }

        //Check passwords
        const match = await comparePassword(password, user.password);
        if(!match) {
            return res.json({
                error: "Wrong password."
            });
        }

        //Create signed token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        user.password = undefined;
        user.secret = undefined;

        res.json({
            token,
            user
        });
    } catch(e) {
        console.log(e);
        return res.status(400).send('Error. Try again.');
    }
};

export const currentUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        res.json({ ok : true });
    } catch(e) {
        console.log(e);
        res.sendStatus(400);
    }
};

export const forgotPassword = async (req, res) => {
    const { email, newPassword, secret } = req.body;
    if(!newPassword || newPassword < 6) {
        return res.json({
            error: "New password is requried and should be min 6 characters long"
        });
    }

    if(!secret) {
        return res.json({
            error: "Secret is required"
        });
    }

    const user = await User.findOne({ email, secret });

    if(!user) {
        return res.json({
            error: "We can't verify you with those credentials"
        });
    }

    try {
        const hashed = await hashPassword(newPassword);
        await User.findByIdAndUpdate(user._id, { password: hashed });
        return res.json({
            success: "Congrats! Now you can login with your new password"
        })
    } catch(e) {
        console.log(e);
        return res.json({
            error: "Something went wrong try again."
        });
    }
};

export const profileUpdate = async (req, res) => {
    try {
        const data = {};
        if(req.body.username) {
            data.username = req.body.username;
        }
        if(req.body.about) {
            data.about = req.body.about;
        }
        if(req.body.name) {
            data.name = req.body.name;
        }
        if(req.body.password) {
            if(req.body.password.length < 6) {
                return res.json({
                    error: 'Must be at least 6 characters long'
                });
            } else {
                data.password = await hashPassword(req.body.password);
            }
        }
        if(req.body.secret) {
            data.secret = req.body.secret;
        }
        if(req.body.image) {
            data.image = req.body.image;
        }

        let user = await User.findByIdAndUpdate(req.user._id, data, { new: true });
        user.password = undefined;
        user.secret = undefined;
        res.json(user);
    } catch(e) {
        if(e.code == 11000) {
            return res.json({
                error: 'Duplice username'
            });
        }
        console.log(e);
    }
};

export const findPeople = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        let following =  user.following;
        following.push(user._id);
        const people = await User.find({_id: { $nin: following }}).select('-password -secret').limit(10);
        res.json(people);
    } catch(e) {
        console.log(e);
    }
};

export const addFollower = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, {
            $addToSet: { followers: req.user._id }
        });
        next();
    } catch(e) {
        console.log(e);
    }
};

export const userFollow = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, {
            $addToSet: { following: req.body._id }
        }, { new: true }).select('-password -secret');
        res.json(user);
    } catch(e) {
        console.log(e);
    }
};

export const userFollowing = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        const following = await User.find({ _id: user.following }).limit(100);
        res.json(following);
    } catch(e) {
        console.log(e);
    }
};

export const removeFollower = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.body._id, {
            $pull: { followers: req.user._id }
        });
        next();
    } catch(e) {
        console.log(e);
    }
};

export const userUnfollow = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.user._id, {
            $pull: { following: req.body._id }
        }, { new: true });
        res.json(user);
    } catch(e) {
        console.log(e);
    }
};