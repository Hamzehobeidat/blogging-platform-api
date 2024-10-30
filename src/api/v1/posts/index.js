import express from 'express';
import tokenValidator from '../../../middlewares/auth/tokenValidator';
import checkPostOwnership from '../../../middlewares/validators/checkPostOwnership';
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  getUserPostsByUserId
} from './controller';

const router = express.Router();

router.post('/', tokenValidator, createPost);

router.get('/', getPosts);

router.get('/user', tokenValidator, getUserPostsByUserId);

router.get('/:id', getPostById);

router.patch('/:id', tokenValidator, checkPostOwnership, updatePost);

router.delete('/:id', tokenValidator, checkPostOwnership, deletePost);

export default router;
