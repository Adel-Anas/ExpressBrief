require('dotenv').config();
const mongoose = require('mongoose');

const connexion = mongoose.connect(process.env.MONGODB_URI)
.then(()=> {
    console.log('Connected to MongoDB');
})
.catch((err)=>{
    console.log('Error connecting to MongoDB' + err);
})

module.exports = connexion;