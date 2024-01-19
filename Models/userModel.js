const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: [
      isEmail, "Please enter a valid email address"
    ]
  },
  password: {
    type: String,
    required: true,
  },
});


const User = mongoose.model('User', userSchema);

module.exports = User;
