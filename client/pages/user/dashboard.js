import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import PostForm from '../../components/forms/PostForm';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';
import PostList from '../../components/cards/PostList';
import People from '../../components/cards/People';
import Link from 'next/link';

const Home = () => {
    const [state, setState] = useContext(UserContext);
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
<<<<<<< HEAD
    const [posts, setPosts] = useState([]);
    const [people, setPeople] = useState([]);
=======
>>>>>>> d4c6423d3095f8332e8d57fc3dbfa81d54927a90
    const router = useRouter();

    useEffect(() => {
        if(state && state.token) {
            newsFeed();
            findPeople();
        }
    }, [state && state.token]);

    const newsFeed = async () => {
        try {
            const { data } = await axios.get('/news-feed');
            setPosts(data);
        } catch(e) {
            console.log(e);
        }
    };

    const findPeople = async () => {
        try {
            const { data } = await axios.get('/find-people');
            setPeople(data);
        } catch(e) {
            console.log(e);
        }
    };

    const postSubmit = async e => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/create-post', { content, image });
            if(data.error) {
                toast.error(data.error);
            } else {
                newsFeed();
                toast.success("Post created");
                setContent('');
                setImage({});
            }
        } catch(e) {
            console.log(e);
        }
    }

    const handleImage = async e => {
        const file = e.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        setUploading(true);

        try {
            const { data } = await axios.post('/upload-image', formData);
            setImage({
                url: data.url,
                public_id: data.public_id
            });
            setUploading(false);
        } catch(e) {
            console.log(e);
            setUploading(false);
        }
    }

<<<<<<< HEAD
    const handleDelete = async (post) => {
        try {
            const answer =  window.confirm('Are you sure?');
            if(!answer) return;
            const { data } = await axios.delete(`/delete-post/${post._id}`);
            toast.error('Post deleted');
            newsFeed();
        } catch(e) {
            console.log(e);
        }
    };

    const handleFollow = async (user) => {
        try {
            const { data } = await axios.put('/user-follow', { _id: user._id });
            let auth = JSON.parse(localStorage.getItem('auth'));
            auth.user = data;
            localStorage.setItem('auth', JSON.stringify(auth));

            setState({...state, user: data});
            let filtered = people.filter((p) => (p._id !== user._id));
            setPeople(filtered);
            newsFeed();
            toast.success(`Following ${user.name}`);
        } catch(e) {
            console.log(e);
        }
    };

    const handleLike = async (_id) => {
        try {
            const { data } = await axios.put('/like-post', { _id });
            console.log("Liked: ", data);
            newsFeed();
        } catch(e) {
            console.log(e);
        }
    };

    const handleUnlike = async (_id) => {
        try {
            const { data } = await axios.put('/unlike-post', { _id });
            console.log("Unliked: ", data);
            newsFeed();
        } catch(e) {
            console.log(e);
        }
    };

=======
>>>>>>> d4c6423d3095f8332e8d57fc3dbfa81d54927a90
    return (
        <UserRoute>
            <div className="container-fluid">
                <div className='row py-5 text-light bg-default-image'>
                    <div className='col text-center'>
                        <h1>News Feed</h1>
                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-md-8">
<<<<<<< HEAD
                        <PostForm
                            content={content}
                            setContent={setContent}
                            postSubmit={postSubmit}
                            handleImage={handleImage}
                            uploading={uploading}
                            image={image}
                        />
                        <br />
                        <PostList handleLike={handleLike} handleUnlike={handleUnlike} posts={posts} handleDelete={handleDelete} />
=======
                        <CreatePostForm content={content} setContent={setContent} postSubmit={postSubmit} handleImage={handleImage} uploading={uploading} image={image} />
>>>>>>> d4c6423d3095f8332e8d57fc3dbfa81d54927a90
                    </div>

                    <div className="col-md-4">
                        {state && state.user && state.user.following && (
                            <Link href={`/user/following`}>
                                <a className="h6">Following { state.user.following.length }</a>
                            </Link>
                        )}
                        <People people={people} handleFollow={handleFollow} />
                    </div>
                </div>
            </div>
        </UserRoute>        
    );
};

export default Home;