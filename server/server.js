require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const {SERVER_PORT} = process.env;
const {seed} = require('./seed.js')

//const db = require('./db.json')
const { getItemsByCategory, createItem, updateItem, deleteItem,  } = require('./controller')

app.use(cors());
app.use(express.json());

//DEV
app.post('/seed', seed)

app.get(`/api/items/:category`, getItemsByCategory);
app.post(`/api/items/:category`, createItem);
app.delete(`/api/items/:category/:id`, deleteItem);
app.put(`/api/items/:category/:id`, updateItem);

//const SERVER_PORT = 4005

app.listen(SERVER_PORT, () => {
    // console.log('hello', db),
    console.log(`Port running on ${SERVER_PORT}.`)
});