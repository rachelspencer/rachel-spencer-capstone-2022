const baseURL = `http://localhost:4005/api/items`;

const itemsContainer = document.querySelector('#items-container');

// Promise handlers
const successCallBack = (res) => displayItems(res.data);
const errCallBack = err => console.log(err);

// API Calls
export const getItemsByCategory = (category) => axios.get(baseURL + "/" + category).then(successCallBack).catch(errCallBack);
const createItem = (category, body) => axios.post(`${baseURL}/${category}`, body).then(successCallBack).catch(errCallBack);
const deleteItem = (category, id) => axios.delete(`${baseURL}/${category}/${id}`).then(successCallBack).catch(errCallBack);

const updateItem = (e, category, id) => {
    e.stopPropagation();
    console.log(id)
    console.log(e.target);
    axios.put(`${baseURL}/${category}/${e.target.name}`).then(successCallBack).catch(errCallBack);
}

// Event handlers
export function submitHandler(e, category) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let recommendedBy = document.querySelector('#recommended-by')
    let imageURL = document.querySelector('#image-URL')

    let bodyObj = {
        name: name.value,
        recommendedBy: recommendedBy.value,
        imageURL: imageURL.value,
    }

    createItem(category, bodyObj);
    
    name.value = ''
    recommendedBy.value = ''
    imageURL.value = ''
}

// Display functions
function createItemCard(item) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')

    itemCard.innerHTML = `<img alt="item cover" src=${item.imageURL} class="item-cover"/>
    <div class="item-details"
        <section id="item-title"
            <p>${item.name}</p>
        </section>
        <section id="item-recommend"
            <p><span>Recommended by: </span>${item.recommendedBy}</p>
        </section>
        <div class="status-section">
            <label class="toggle" for="myToggle-${item.id}">
                <input name=${item.id} "checked=${item.completed} class="toggle__input" type="checkbox" id="myToggle-${item.id}">
                <div class="toggle__fill"></div>
            </label>
            <h3>Been there, done that</h3>
        </div>
        
        <button class="delete-item-btn">x</button>
        
    </div>
    `
    const deleteButton = itemCard.getElementsByClassName("delete-item-btn")[0];
    const toggleButton = itemCard.getElementsByClassName("toggle__input")[0];
   
    deleteButton.addEventListener('click', () => deleteItem(item.category, item.id));
    toggleButton.addEventListener('click', (e) => console.log("hello") || updateItem(e, item.category));
    itemsContainer.appendChild(itemCard)
}

export function displayItems(arr) {
    itemsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCard(arr[i])
    }
};