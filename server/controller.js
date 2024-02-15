require('dotenv').config();
const { URI } = process.env
const Sequelize = require('sequelize');

const sequelize = new Sequelize(URI, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, 
      },
    },
    define: {
      timestamps: false,
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });

let globalID = 31;

const getItemsByCategory = (req, res) => {   
    const category = req.params.category;
    sequelize.query(`SELECT * FROM items 
    WHERE category = '${category}';`)
        .then(dbRes => {
            console.log(dbRes)
            res.status(200).send(dbRes[0])} )
        .catch(err => console.log(err))
};

const createItem = (req, res) => {
    //const { id, name, recommendedBy, imageURL } = req.body;
    const { name, recommendedBy, imageURL } = req.body;
    const { category } = req.params;

    if (!name, !recommendedBy, !imageURL) {
        res.status(400).send('Data is missing.')
    } else {
        //const { id, name, recommendedBy, imageURL } = req.body;
        const { name, recommendedBy, imageURL } = req.body;
        sequelize.query(`INSERT INTO items (category, name, recommendedBy, imageURL, completed)
        VALUES('${category}','${name}', '${recommendedBy}', '${imageURL}', false)
        RETURNING *;`)
            .then(dbRes => {res.status(200).send(dbRes[0])})
            .catch(err => console.log(err))
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
};

const updateItem = (req, res) => {
    //const items = require('./db.json');
    const { category, id } = req.params;
    sequelize.query(`UPDATE items 
    SET completed =NOT completed 
    WHERE id = ${id}
    RETURNING *`)
    sequelize.query(`ORDER BY id ASC`)
    .then(dbRes => {
        console.log("id", id)
        res.status(200).send(dbRes[0])} )
    .catch(err => console.log(err))
};

module.exports = {
    sequelize,
    getItemsByCategory,
    createItem,
    deleteItem,
    updateItem,
};