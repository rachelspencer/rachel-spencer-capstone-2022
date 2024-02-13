require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');
const {PORT} = process.env || 3000;
const {seed} = require('./seed.js');
const { sequelize, getItemsByCategory, createItem, deleteItem, updateItem } = require('./controller'); 

console.log("this is the  server port:", PORT);

app.use(cors());
app.use(express.json());

const routes = [
    {route: '/', file: '../public/index.html'},
    {route: '/styles', file: '../public/index.css'},
    {route: '/js', file: '../public/main.js'},

];

routes.forEach(({ route, file }) => {
    app.get(route, (req, res) => {
      res.sendFile(path.join(publicPath, file));
    });
  });

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
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });