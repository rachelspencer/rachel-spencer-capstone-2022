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
   
    const category = req.params.category;
    sequelize.query(`SELECT * FROM items 
    WHERE category = '${category}';`)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).send(dbRes[0])} )
        .catch(err => console.log(err))

    //JS if using local DB 
    // const category = req.params.category;
    // const filteredItems = items.filter(item => item.category === category)
    // res.status(200).send(filteredItems)
};

const createItem = (req, res) => {
    //const { id, name, recommendedBy, imageURL } = req.body;
    const { name, recommendedBy, imageURL } = req.body;
    const { category } = req.params;

    if (!name, !recommendedBy, !imageURL) {
        res.status(400).send('Data is missing.')
    } else {
        //const { id, name, recommendedBy, imageURL } = req.body;
        const { name, recommendedBy, imageURL, completed } = req.body;
        sequelize.query(`INSERT INTO items (category, name, recommendedBy, imageURL, completed)
        VALUES('${category}','${name}', '${recommendedBy}', '${imageURL}', false)
        RETURNING *;`)
            .then(dbRes => {res.status(200).send(dbRes[0])})
            .catch(err => console.log(err))

        //JS if using local DB
        // items.push({
        //     id: globalID,
        //     category,
        //     name,
        //     recommendedBy,
        //     imageURL,
        //     completed: false,
        // });
        // globalID++
        // res.status(200).send(items.filter(item => item.category === category));
    }
};

const deleteItem = (req, res) => {
    //const items = require('./db.json');
    const { category, id } = req.params;

    sequelize.query(`DELETE 
    FROM items
    WHERE id = '${id}';`)
    .then(dbRes => {
        console.log(dbRes)
        res.status(200).send(dbRes[0])} )
    .catch(err => console.log(err))

    //JS if using local DB
    // const itemToDelete = items.findIndex(item => item.id === +id);
    // items.splice(itemToDelete, 1)
    //return res.status(200).send(items.filter(item => item.category === category))  
};

const updateItem = (req, res) => {
    //const items = require('./db.json');
    const { category, id } = req.params;
    sequelize.query(`UPDATE items
    SET completed = true
    WHERE id = '${id}'
    ORDER BY id DESC;`)
    .then(dbRes => {
        console.log(dbRes)
        res.status(200).send(dbRes[0])} )
    .catch(err => console.log(err))

    //JS if using local DB 
    // const itemToUpdate = items.find(item => item.id === +id)
    // itemToUpdate.completed = !itemToUpdate.completed;
    // return res.status(200).send(items.filter(item => item.category === category));
};

module.exports = {
    getItemsByCategory,
    createItem,
    deleteItem,
    updateItem
}