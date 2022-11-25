console.log("connected");

const itemsContainer = document.querySelector('#items-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4005/api/items`;

const { itemsCallBack, errCallBack, getActivityItems, createItem, submitHandler, createItemCard, displayItems } = require('./main.js')

itemsCallBack()
errCallBack()
createItem()
submitHandler()
createItemCard()
displayItems()
getActivityItems()