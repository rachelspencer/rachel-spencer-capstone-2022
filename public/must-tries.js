console.log("connected");

const itemsContainer = document.querySelector('#items-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4005/api/items`;

const itemsCallBack = (res) => displayItems(res.data)
const errCallBack = err => console.log(err.response.data)
//const toggleStatusCallBack = 

const getItemsByCategory = () => axios.get(baseURL +  '/must-try').then(itemsCallBack).catch(errCallBack);
const createItem = (body) => axios.post(baseURL, body).then(itemsCallBack).catch(errCallBack)
//const updateToggleStatus = (id) => axios.put(toggleStatusCallBack).then(itemsCallBack).catch(errCallBack)

function submitHandler(e) {
    e.preventDefault()
    console.log('form', form);

    let name = document.querySelector('#name')
    let websiteURL = document.querySelector('#website-URL')
    let imageURL = document.querySelector('#image-URL')

    let bodyObj = {
        name: name.value,
        websiteURL: websiteURL.value,
        imageURL: imageURL.value,
    }

    createItem(bodyObj);
    
    name.value = ''
    websiteURL.value = ''
    imageURL.value = ''
}

function createItemCard(item) {
    const itemCard = document.createElement('div')
    itemCard.classList.add('item-card')

    
    itemCard.innerHTML = `<img alt="item cover" src=${item.imageURL} class="item-cover"/>
    <p class="item-title">${item.name}</p>
    <p class="item-url">${item.websiteURL}</p>
    <label class="toggle" for="myToggle">
        <input checked=${item.completed} class="toggle__input" type="checkbox" id="myToggle">
        <div class="toggle__fill"></div>
    </label>
    `

    itemsContainer.appendChild(itemCard)
}

function displayItems(arr) {
    itemsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)
getItemsByCategory()