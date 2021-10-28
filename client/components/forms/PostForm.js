import { Avatar } from 'antd';
import { CameraOutlined, LoadingOutlined } from '@ant-design/icons';
import dynamic from 'next/dynamic';
// import ReactQuill from 'react-quill';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

<<<<<<< HEAD:client/components/forms/PostForm.js
const PostForm = ({ content, setContent, postSubmit, handleImage, uploading, image }) => {
=======
const CreatePostForm = ({ content, setContent, postSubmit, handleImage, uploading, image }) => {
>>>>>>> d4c6423d3095f8332e8d57fc3dbfa81d54927a90:client/components/forms/CreatePostForm.js
    return (
        <div className="card">
            <div className="card-body pb-3">
                <form className="form-group">
                    <ReactQuill
                        theme="snow"
                        value={content}
                        onChange={e => setContent(e)}
                        className="form-control"
                        placeholder="Write something..."
                    />
                </form>
            </div>

            <div className="card-footer d-flex justify-content-between text-muted">
                <button disabled={!content} onClick={postSubmit} className="btn btn-primary btn-sm mt-1">Post</button>
                <label>
                    {
                        image && image.url ? (
                            <Avatar size={30} src={image.url} className="mt-1" />
                        ) : uploading ? (
                            <LoadingOutlined className="mt-2" />
                        ) : (
                            <CameraOutlined className="mt-2" />
                        )
                    }
                    <input onChange={handleImage} type="file" accept="images/*" hidden />
                </label>
            </div>
        </div>
    )
}

export default PostForm;