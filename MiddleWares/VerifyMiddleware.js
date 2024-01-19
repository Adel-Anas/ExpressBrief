const jwt = require('jsonwebtoken');

const VerifyUser = (req, res, next) => {
    const {access_token} = req.cookies;
    if (!access_token) {
        res.status(401).json({message : "Unauthorized"})
    }
    try {
        const verifyToken = jwt.verify(access_token , process.env.JWT_SECRET);
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
   
    }
}

module.exports = VerifyUser;