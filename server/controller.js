const  items = require('./db.json')
let globalID = 31;

const getActivityItems = (req, res) => {
    const category = req.params.category;
    const items = category.filter('activities')
    res.status(200).send(items)
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
        res.status(400).send('Charlee is cool.')
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
    getActivityItems,
    createItem,
    deleteItem
}