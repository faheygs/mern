import User from '../models/user';
import { hashPassword, comparePassword } from '../helpers/auth';
import jwt from 'jsonwebtoken';

export const register = async(req, res) => {
    // console.log(`Register end point => ${JSON.stringify(req.body)}`);
    const { name, email, password, secret } = req.body;

    if(!name) return res.status(400).send('Name is required');
    if(!password || password.length < 6) return res.status(400).send('Password is required and should be at least 6 characters');
    if(!secret) return res.status(400).send('Answer is requried');
    
    const exist = await User.findOne({ email });

    if(exist) return res.status(400).send('Email is taken');

    const hashedPassword = await hashPassword(password);

    const user = new User({
        name,
        email,
        password: hashedPassword,
        secret
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
        if(!user) return res.status(400).send('No user found.');

        //Check passwords
        const match = await comparePassword(password, user.password);
        if(!match) return res.status(400).send('Wrong password.');

        //Create signed token
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

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