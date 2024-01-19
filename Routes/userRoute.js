const express = require('express');

const userRouter = express.Router();

const userController = require('../Controllers/userController')

const VerifyUser = require('../MiddleWares/VerifyMiddleware');

userRouter.get('/verifying', VerifyUser, (req, res) => 
    res.status(200).json("User Verified")
)

userRouter.post('/register', userController.registerUser)

userRouter.post('/login', userController.userLogin)

userRouter.get('/logout', VerifyUser, userController.userLogout)


module.exports = userRouter