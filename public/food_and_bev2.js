import {
    getItemsByCategory,
    submitHandler,
} from './main.js';

const ITEM_CATEGORY = 'foodAndBev';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => submitHandler(e, ITEM_CATEGORY));
getItemsByCategory(ITEM_CATEGORY);