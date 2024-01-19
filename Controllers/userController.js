const bcrypt = require('bcrypt');

const User = require('../Models/userModel')

const jwt = require('jsonwebtoken')



const registerUser = async (req, res) => {
  try {
      const { firstName, lastName, email, password } = req.body;
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
  
      res.status(201).json({ message: 'User registered successfully', newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const userLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if(!user){
        return res.status(401).json({ message: 'Email or Password Incorrect' });
      }
        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
          return res.status(401).json({ message: 'Email or Password Incorrect' });
        }
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.cookie("access_token",token);
        res.status(200).json({ token });
    }catch(err){
      console.error(err);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  const userLogout = (req, res) => {
    res.clearCookie("access_token");
    res.status(200).json({ message: 'Logged out successfully' });
  }

module.exports = { registerUser, userLogin, userLogout };