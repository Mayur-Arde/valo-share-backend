import express from 'express';

import {
  getAllUsers,
  loginUser,
  signup,
  getUserById,
  updateUserData,
  addNotifs,
  updateFollowingAndFollowersCount,
} from '../controllers/users.js';

const router = express.Router();

router.get('/', getAllUsers);

router.post('/login', loginUser);

router.post('/signup', signup);

router.get('/:userId', getUserById);

router.post('/update', updateUserData);

router.post('/addnotifs', addNotifs);

router.post('/follow', updateFollowingAndFollowersCount);

export default router;
