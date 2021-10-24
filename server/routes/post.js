import express from 'express';
import { createPost, uploadImage } from '../controllers/post';
import { requireSignIn } from '../middlewares';
import formidable from 'express-formidable';

const router = express.Router();

router.post('/create-post', requireSignIn, createPost);
router.post('/upload-image', requireSignIn, formidable({ maxFileSize: 5 * 1024 * 1024 }), uploadImage);

module.exports = router;