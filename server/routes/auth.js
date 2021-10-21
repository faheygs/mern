import express from 'express';
import { register, login, currentUser } from '../controllers/auth';
import { requireSignIn } from '../middlewares';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/current-user', requireSignIn, currentUser);

module.exports = router;