import express from 'express';
import checkUserExists from '../../../middlewares/auth/checkUserExists';
import { signIn, signUp } from './controller';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', checkUserExists, signUp);

export default router;
