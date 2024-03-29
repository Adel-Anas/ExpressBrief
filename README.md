# Express CRUD API Mini Project


# Recipe App

This repository contains a simple Express.js application for managing recipes. It uses MongoDB as a database to store and retrieve recipe data. Below is a guide on setting up and running the application.

# Prerequisites

Node.js: Make sure you have Node.js installed on your machine. You can download it [here](https://nodejs.org/en).

MongoDB: Ensure that you have MongoDB installed locally. You can download it [here](https://www.mongodb.com/docs/manual/installation/).

# Getting Started
1-Clone the repository to your local machine:   
`git clone https://github.com/your-username/ExpressBrief.git`

2-Navigate to the project directory: 
`cd ExpressCrud` 

3-Install the dependencies : `npm install`

# Configuring MongoDB

1-Ensure MongoDB is running on your local machine.
2-Open the 'config/connect.js' file and update the connection string if your MongoDB instance is running on a different host or port.

# Running the Application

1-Start the Express server:
 `node index.js`
 The server will run on http://localhost:4000  by default.

2-Use your preferred API testing tool (e.g., Postman, Insomnia) or a web browser to interact with the API.

# API Endpoints

GET /recipes: Retrieve all recipes.

POST /recipes: Add a new recipe. Send a JSON object with the recipe details in the request body.

PUT /recipes/:id: Update a recipe by ID. Provide the recipe ID in the URL and send the updated details in the request body.

DELETE /recipes/:id: Delete a recipe by ID. Provide the recipe ID in the URL.

# Example Requests
## Adding a Recipe :
````
POST http://localhost:4000/recipes
Content-Type: application/json

{
  "name": "Delicious Pasta",   
  "category": "Main Dish",  
  "ingredients": ["Pasta", "Tomato Sauce", "Cheese"],  
  "instructions": ["Boil pasta", "Mix with sauce", "Top with cheese"],   
}
````

# Updating a Recipe
````
PUT http://localhost:4000/recipes/recipe-id
Content-Type: application/json

{
  "name": "Chiken Tagine,
  "instructions": ["Cut Chicken 4 pieces", "Cut some Potatoes", ...]
}
````
# Deleting a Recipe
`DELETE http://localhost:4000/recipes/recipe-id
`


# Authentication

- *Register User:*

    POST /api/register

    Request Body:

    json
    {
      "username": "example",
      "password": "securepassword"
    }
    

    Response:

    json
    {
      "token": "your_jwt_token"
    }
    

- *Login:*

    POST /api/login

    Request Body:

    json
    {
      "username": "example",
      "password": "securepassword"
    }
    

    Response:

    json
    {
      "token": "your_jwt_token"
    }
    

### Endpoints

- *Get All Recipes:*

    GET /api/recipes

    Requires authentication.

- *Get Recipe by ID:*

    GET /api/recipes/:id

    Requires authentication.

- *Create Recipe:*

    POST /api/recipes

    Requires authentication.

    Request Body:

    json
    {
      "title": "Spaghetti Bolognese",
      "ingredients": ["spaghetti", "minced meat", "tomato sauce"],
      "instructions": "Boil spaghetti. Cook minced meat. Mix with tomato sauce."
    }
    

- *Update Recipe:*

    PUT /api/recipes/:id

    Requires authentication.

    Request Body:

    json
    {
      "title": "Updated Spaghetti Bolognese",
      "ingredients": ["spaghetti", "minced meat", "tomato sauce", "extra ingredient"],
      "instructions": "Boil spaghetti. Cook minced meat. Mix with tomato sauce. Add extra ingredient."
    }
    

- *Delete Recipe:*

    DELETE /api/recipes/:id

    Requires authentication.



