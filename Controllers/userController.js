const bcrypt = require('bcrypt');

const User = require('../models/userModel');

const jwt = require('jsonwebtoken')

const registerUser = async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(409).json({ message: 'This email already exists' });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  module.exports = registerUser;