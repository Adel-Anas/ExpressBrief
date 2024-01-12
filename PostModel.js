const mongoose = require('mongoose')

const postScheme = mongoose.Schema({
  name: {type: String, required: true},
  category: {type: String, required: true},
  ingredients: {type: Array, required: true},
  instructions: {type: Array, required: true},
})


const Post = mongoose.model('Post', postScheme)

module.exports= Post;