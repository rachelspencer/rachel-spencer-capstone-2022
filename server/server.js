const express = require('express');
const app = express();
const cors = require('cors');

const { appData } = require('./db.json')
const { getAppData, createAppData, deleteAppData } = require('./controller')

app.use(cors());
app.use(express.json());

app.get('/appData', getAppData);
app.post('/appData', createAppData);
app.delete('/appData', deleteAppData);

const SERVER_PORT = 4005

app.listen(SERVER_PORT, () => {
    console.log('hello', appData),
    console.log(`Port running on ${SERVER_PORT}.`)
});