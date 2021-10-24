import express from 'express';
import { createPost } from '../controllers/post';
import { requireSignIn } from '../middlewares';

const router = express.Router();

router.post('/create-post', requireSignIn, createPost);

module.exports = router;