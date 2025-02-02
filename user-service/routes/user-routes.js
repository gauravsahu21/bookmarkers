const express = require('express');
const { signUp, signIn, verifyToken, getUser, getUserById, refreshToken, signOut } = require('../controllers/user-controller');

const router = express.Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', verifyToken, signOut);
router.get('/user', verifyToken, getUser);
router.get('/user/:id', getUserById);
router.get('/refresh', refreshToken, verifyToken, getUser);

module.exports = router;
