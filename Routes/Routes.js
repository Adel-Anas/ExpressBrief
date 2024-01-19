const express = require('express');

const { getAllPosts, createPost, updatePost, deletePost } = require('../Controllers/Controllers');
const VerifyUser = require('../MiddleWares/VerifyMiddleware');

const router = express.Router();

router.get('/posts', getAllPosts);

router.post('/posts', VerifyUser, createPost);

router.put('/posts/:id', VerifyUser,  updatePost);

router.delete('/posts/:id', VerifyUser, deletePost);

module.exports = router;