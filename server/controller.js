const  items = require('./db.json')
let globalID = 31;

const getItemsByCategory = (req, res) => {
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
            liked: false,
        });
        globalID++
        res.status(200).send(items.filter(item => item.category === category));
    }
}

const deleteItem = (req, res) => {
    const items = require('./db.json');
    const id = req.params.id;
    const itemToDelete = items.findIndex(item => item.id === +id);
    items.splice(itemToDelete, 1)
    return res.status(200).send(items)  
}
    
module.exports = {
    getItemsByCategory,
    createItem,
    deleteItem
}