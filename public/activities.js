import {
    getItemsByCategory,
    submitHandler,
    assignActiveClass
} from './main.js';

const ITEM_CATEGORY = 'activities';
console.log('hi');
assignActiveClass();
const form = document.querySelector('form');
form.addEventListener('submit', (e) => submitHandler(e, ITEM_CATEGORY));
getItemsByCategory(ITEM_CATEGORY);