require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {SERVER_PORT} = process.env || 3000;
const {seed} = require('./seed.js');
const { sequelize, getItemsByCategory, createItem, deleteItem, updateItem } = require('./controller'); 

console.log("this is the  server port:", SERVER_PORT);

app.use(cors());
app.use(express.json());

sequelize
  .sync() // This will create the tables if they do not exist
  .then(() => {
    console.log('Database connected.');

    // Seed the database (call the seed function)
    seed();

    // Define your routes after the database connection and seeding
    app.get(`/api/items/:category`, getItemsByCategory);
    app.post(`/api/items/:category`, createItem);
    app.delete(`/api/items/:category/:id`, deleteItem);
    app.put(`/api/items/:category/:id`, updateItem);

    // Start the server
    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}.`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });