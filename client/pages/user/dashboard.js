import { useContext, useState } from 'react';
import { UserContext } from '../../context';
import UserRoute from '../../components/routes/UserRoute';
import CreatePostForm from '../../components/forms/CreatePostForm';
import { useRouter } from 'next/router';
import axios from 'axios';
import { toast } from 'react-toastify';

const Home = () => {
    const [state, setState] = useContext(UserContext);
    const [content, setContent] = useState("");
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const router = useRouter();

    const postSubmit = async e => {
        e.preventDefault();

        try {
            const { data } = await axios.post('/create-post', { content, image });
            if(data.error) {
                toast.error(data.error);
            } else {
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
                        <CreatePostForm content={content} setContent={setContent} postSubmit={postSubmit} handleImage={handleImage} uploading={uploading} image={image} />
                    </div>
                    <div className="col-md-4">
                        SideBar
                    </div>
                </div>
            </div>
        </UserRoute>        
    );
};

export default Home;