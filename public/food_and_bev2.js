import {
    displayItems,
    getItemsByCategory,
    submitHandler,
} from './main.js';

const ITEM_CATEGORY = 'foodAndBev';

const itemsContainer = document.querySelector('#items-container');
const form = document.querySelector('form');

const successCallBack = (res) => displayItems(res.data, itemsContainer);
const errCallBack = err => console.log(err);

form.addEventListener('submit', (e) => submitHandler(e, ITEM_CATEGORY, successCallBack, errCallBack));
getItemsByCategory(ITEM_CATEGORY).then(successCallBack).catch(errCallBack);