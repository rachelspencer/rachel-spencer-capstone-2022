const  items = require('./db.json')
let globalID = 31;

const getItemsByCategory = (req, res) => {
    console.log("Hello", req.params)
    const category = req.params.category;
    const filteredItems = items.filter(item => item.category === category)
    res.status(200).send(filteredItems)
};

// const updateItem = (req, res) => {
//     // get item id from request body
//     const id = ;

//     // find item in array with matching id (Array.find())

//     // toggle completed property of that item

//     // send back response with items array
// }

const createItem = (req, res) => {
    const { id, category, name, websiteURL, imageURL } = req.body;

    if (!name, !websiteURL, !imageURL) {
        res.status(400).send('Data is missing.')
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
    getItemsByCategory,
    createItem,
    deleteItem
}