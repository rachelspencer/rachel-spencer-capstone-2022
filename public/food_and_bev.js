
console.log("connected");

const itemsContainer = document.querySelector('#items-container')
const form = document.querySelector('form')

// local
// const baseURL = `http://localhost:4005/api/items`;
// dev
const baseURL = `/api/items`

const itemsCallBack = (res) => displayItems(res.data)
const errCallBack = err => console.log(err.response.data)
//const toggleStatusCallBack = 

const getItemsByCategory = () => axios.get(baseURL +  '/foodAndBev').then(itemsCallBack).catch(errCallBack);
const createItem = (body) => axios.post(baseURL, body).then(itemsCallBack).catch(errCallBack)
// const deleteItem = (id) => axios.delete(`${baseURL}/${id}`).then(itemsCallBack).catch(errCallBack)

function submitHandler(e) {
    e.preventDefault()
    console.log('form', form);

    let name = document.querySelector('#name')
    let recommendedBy = document.querySelector('#recommended-by')
    let imageURL = document.querySelector('#image-URL')

    let bodyObj = {
        name: name.value,
        recommendedBy: recommendedBy.value,
        imageURL: imageURL.value,
    }

    createItem(bodyObj);
    
    name.value = ''
    recommendedBy.value = ''
    imageURL.value = ''
}

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
            <label class="toggle" for="myToggle">
            <input checked=${item.completed} class="toggle__input" type="checkbox" id="myToggle">
                <div class="toggle__fill"></div>
            </label>
            <h3>Been there, done that</h3>
        </div>
        
        <button class="delete-item-btn" onclick="deleteItem(${item.id})">x</button>
        
    </div>
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