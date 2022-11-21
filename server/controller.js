const  items = require('./db.json')
let globalID = 31;

const getItems = (req, res) => {
    // const category = req.params.category;
    res.status(200).send(items)
};

const createItem = (req, res) => {
    const { id, category, name, websiteURL, imageURL } = req.body;

    if (!name, !websiteURL, !imageURL) {
        res.status(400).send('Missing data.')
    } else {
        const { id, category, name, websiteURL, imageURL } = req.body;
        items.push({
            id: globalID,
            category,
            name,
            websiteURL,
            imageURL,
            completed: false,
            liked: false,
        });
        globalID++
        res.status(200).send(items);
    }
}

const deleteItem = (req, res) => {
    const items = require('./db.json')
    const { id } = req.params;
    for (i = 0; i < appData.length; i++) {
        if (items[i].id === +id) {
            items.splice(i, 1)
            return res.status(200).send(items)
        }

    }
    res.status(400).send('Listing not found.')
}

module.exports = {
    getItems,
    createItem,
    deleteItem
}