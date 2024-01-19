// server.js
const express = require("express");
const postRoutes = require('./Routes/Routes')
const userRoutes = require('./Routes/userRoute');
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 4000;
require("./Connexion/Connexion"); // Import MongoDB connectionq

//Parsers
app.use(express.json());

app.use(cookieParser());
app.use(postRoutes)
app.use(userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
