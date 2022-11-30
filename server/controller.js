require('dotenv').config();

const {CONNECTION_STRING} = process.env;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

//const  items = require('./db.json')

let globalID = 31;

const getItemsByCategory = (req, res) => {
    console.log('called');
    const category = req.params.category;
    sequelize.query(`SELECT * FROM items 
    WHERE category = '${category}';`)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).send(dbRes[0])} )
        .catch(err => console.log(err))

    // JS for require('./db.json' 
    // const category = req.params.category;
    // const filteredItems = items.filter(item => item.category === category)
    // res.status(200).send(filteredItems)
};

const createItem = (req, res) => {
    const { id, name, recommendedBy, imageURL } = req.body;
    const { category } = req.params;

    if (!name, !recommendedBy, !imageURL) {
        res.status(400).send('Data is missing.')
    } else {
        const { id, name, recommendedBy, imageURL } = req.body;
        items.push({
            id: globalID,
            category,
            name,
            recommendedBy,
            imageURL,
            completed: false,
        });
        globalID++
        res.status(200).send(items.filter(item => item.category === category));
    }
};

const deleteItem = (req, res) => {
    const items = require('./db.json');
    const { category, id } = req.params;
    const itemToDelete = items.findIndex(item => item.id === +id);
    items.splice(itemToDelete, 1)
    return res.status(200).send(items.filter(item => item.category === category))  
};

const updateItem = (req, res) => {
    const items = require('./db.json');
    const { category, id } = req.params;

    const itemToUpdate = items.find(item => item.id === +id)
    itemToUpdate.completed = !itemToUpdate.completed;
    
    return res.status(200).send(items.filter(item => item.category === category));
};

module.exports = {
    getItemsByCategory,
    createItem,
    deleteItem,
    updateItem
}