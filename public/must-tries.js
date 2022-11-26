import {
    getItemsByCategory,
    submitHandler,
} from './main.js';

const ITEM_CATEGORY = 'must-try';

const form = document.querySelector('form');
form.addEventListener('submit', (e) => submitHandler(e, ITEM_CATEGORY));
getItemsByCategory(ITEM_CATEGORY);