const bcrypt = require('bcrypt');
const User = require('../models/userModel');
const Post = require('../Schema/PostModel');

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error('There was an error fetching the Data', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, category, ingredients, instructions } = req.body;
    const newData = await Post.create({ name, category, ingredients, instructions });
    res.status(201).json(newData);
  } catch (err) {
    console.error('There was an error creating the post', err);
    res.status(400).json({ error: 'Bad Request' });
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  try {
    const { name, category, ingredients, instructions } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, { name, category, ingredients, instructions }, { new: true });
    res.json(updatedPost);
  } catch (err) {
    console.error('There was an error updating the post', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    res.json({ message: 'Post deleted successfully', deletedPost });
  } catch (err) {
    console.error('There was an error deleting the post', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};



module.exports = {
  getAllPosts,
  createPost,
  updatePost,
  deletePost,
};
