// server.js
const express = require("express");
const postRoutes = require('./Routes')
const app = express();
const PORT = 4000;
require("./Connexion"); // Import MongoDB connectionq

//Parsers
app.use(express.json());


app.use(postRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
