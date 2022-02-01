import express from 'express';

import {
  getAllPosts,
  getPostById,
  createPost,
  likePost,
  createComment,
  deleteComment,
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:postId', getPostById).delete('/:postId', deletePostById);

router.post('/newpost', createPost);

router.post('/like/:postId', likePost);

router.post('comment/:postId', createComment);

router.delete('/comment/:postId/delete', deleteComment);

export default router;
