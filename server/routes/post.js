import express from 'express';
<<<<<<< HEAD
import { createPost, uploadImage, postsByUser, userPost, updatePost, deletePost, newsFeed, likePost, unlikePost } from '../controllers/post';
import { requireSignIn, canEditDeletePost } from '../middlewares';
=======
import { createPost, uploadImage } from '../controllers/post';
import { requireSignIn } from '../middlewares';
>>>>>>> d4c6423d3095f8332e8d57fc3dbfa81d54927a90
import formidable from 'express-formidable';

const router = express.Router();

router.post('/create-post', requireSignIn, createPost);
router.post('/upload-image', requireSignIn, formidable({ maxFileSize: 5 * 1024 * 1024 }), uploadImage);
<<<<<<< HEAD
router.get('/user-posts', requireSignIn, postsByUser);
router.get('/user-post/:_id', requireSignIn, userPost);
router.put('/update-post/:_id', requireSignIn, canEditDeletePost, updatePost);
router.delete('/delete-post/:_id', requireSignIn, canEditDeletePost, deletePost);

router.get('/news-feed', requireSignIn, newsFeed);

router.put('/like-post', requireSignIn, likePost);
router.put('/unlike-post', requireSignIn, unlikePost);
=======
>>>>>>> d4c6423d3095f8332e8d57fc3dbfa81d54927a90

module.exports = router;