const { appData } = require('./db.json')
let globalID = 31;

const getAppData = (req, res) => {
    res.status(200).send(appData)
    err.status(400).send(console.log(err))
};

const createAppData = (req, res) => {
    const { id, category, name, websiteURL, imageURL } = req.body;

    if (!id, !category, !name, !websiteURL, !imageURL) {
        res.status(400).send('Missing data.')
    } else {
        const { id, category, name, websiteURL, imageURL } = req.body;
        appData.push({
            id: globalID,
            category,
            name,
            websiteURL,
            imageURL,
            completed: false,
            liked: false,
        });
        globalID++
        res.status(200).send(appData);
    }
}

const deleteAppData = (req, res) => {
    const appData = require('./db.json')
    const { id } = req.params;
    for (i = 0; i < appData.length; i++) {
        if (appData[i].id === +id) {
            appData.splice(i, 1)
            return res.status(200).send(appData)
        }

    }
    res.status(400).send('Listing not found.')
}

module.exports = {
    getAppData,
    createAppData,
    deleteAppData
}