const express = require('express');
const app = express();
const cors = require('cors');

const db = require('./db.json')
const { getItemsByCategory, createItem, deleteItem } = require('./controller')

app.use(cors());
app.use(express.json());


app.get(`/api/items/:category`, getItemsByCategory);
// app.put(url, updateItem);
app.post(`/api/items`, createItem);
app.delete(`/api/item/:id`, deleteItem);

const SERVER_PORT = 4005

app.listen(SERVER_PORT, () => {
    // console.log('hello', db),
    console.log(`Port running on ${SERVER_PORT}.`)
});