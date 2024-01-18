const mongoose = require('mongoose');

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
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (password) {
        return password.length >= 6;
      },
      message: 'The password should contain at least 6 characters',
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
