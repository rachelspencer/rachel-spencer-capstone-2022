require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path')
const cors = require('cors');
// const {BASEURL} = process.env || BASEURL;
const PORT = process.env.PORT || 3000;
const {seed} = require('./seed.js');
const { sequelize, getItemsByCategory, createItem, deleteItem, updateItem } = require('./controller'); 

console.log("this is the  server port:", PORT);
app.set('view engine', 'ejs');
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

sequelize
  .sync() // This will create the tables if they do not exist
  .then(() => {
    console.log('Database connected.');

    // Seed the database (call the seed function)
    seed();

    // app.get('/', function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.html"))
    // })

    app.get('/', (req, res) => {
      res.render('pages/index', { isDevelopment: process.env.NODE_ENV === 'development' });
    });

    app.get('/activities', (req, res) => {
      res.render('pages/activities', { isDevelopment: process.env.NODE_ENV === 'development' });
    });

    app.get('/food_and_bev', (req, res) => {
      res.render('pages/food_and_bev', { isDevelopment: process.env.NODE_ENV === 'development' });
    });

    app.get('/must_tries', (req, res) => {
      res.render('pages/must_tries', { isDevelopment: process.env.NODE_ENV === 'development' });
    });

    // app.get('/activities', function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/activities.html"))
    // });

    // app.get('/styles', function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/index.css"))
    // });

    // app.get('/js', function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/main.js"))
    // })

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