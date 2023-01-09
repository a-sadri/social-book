import express from 'express';

import { verifyToken } from '../middlewares/auth.js';
import upload from '../middlewares/fileStorage.js';
import {
  createPost,
  likePost,
  getUserPosts,
  getFeedPosts,
} from '../controllers/postController.js';

const router = express.Router();

router.post('/', verifyToken, upload.single('picture'), createPost);
router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);
router.patch('/:id/like', verifyToken, likePost);

export default router;
