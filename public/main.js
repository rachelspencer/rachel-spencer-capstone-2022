const baseURL = `http://localhost:4005/api/items`;

// API Calls
export const getItemsByCategory = (category) => axios.get(baseURL + "/" + category);
const updateToggleStatus = (id) => axios.put(toggleStatusCallBack).then(itemsCallBack).catch(errCallBack)
const createItem = (category, body) => axios.post(`${baseURL}/${category}`, body);

// Event handlers
export function submitHandler(e, category, onSuccess, onFail) {
    e.preventDefault()

    let name = document.querySelector('#name')
    let recommendedBy = document.querySelector('#recommended-by')
    let imageURL = document.querySelector('#image-URL')

    let bodyObj = {
        name: name.value,
        recommendedBy: recommendedBy.value,
        imageURL: imageURL.value,
    }

    createItem(category, bodyObj).then(onSuccess).catch(onFail);
    
    name.value = ''
    recommendedBy.value = ''
    imageURL.value = ''
}

// Display functions
function createItemCard(item, containerElement) {
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
    containerElement.appendChild(itemCard)
}

export function displayItems(arr, containerElement) {
    containerElement.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCard(arr[i], containerElement)
    }
}

