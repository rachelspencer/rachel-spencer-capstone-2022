const baseURL = `http://localhost:4005/api/items`;

const itemsContainer = document.querySelector('#items-container');

// Promise handlers
const successCallBack = (res) => displayItems(res.data);
const errCallBack = err => console.log(err);

// API Calls
export const getItemsByCategory = (category) => axios.get(baseURL + "/" + category).then(successCallBack).catch(errCallBack);
const createItem = (category, body) => axios.post(`${baseURL}/${category}`, body).then(() => getItemsByCategory(category)).catch(errCallBack);
const deleteItem = (category, id) => axios.delete(`${baseURL}/${category}/${id}`).then(() => getItemsByCategory(category)).catch(errCallBack);

const updateItem = (e, category, id) => {
    axios.put(`${baseURL}/${category}/${e.target.name}`).then(() => getItemsByCategory(category)).catch(errCallBack);
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

    itemCard.innerHTML = `<img alt="item cover" src=${item.imageurl} class="item-cover"/>
    <div class="item-details">
        <section id="item-title">
            <p>${item.name}</p>
        </section>
        <section id="item-recommend">
            <p><span>Recommended by: </span>${item.recommendedby}</p>
        </section>
        <div class="status-section">
            <label class="toggle" for="myToggle-${item.id}">
                <input name=${item.id} ${item.completed ? 'checked' : ''} class="toggle__input" type="checkbox" id="myToggle-${item.id}">
                <div class="toggle__fill" ≈></div>
            </label>
            <h3>Been there, done that</h3>
        </div>
        
        <button class="delete-item-btn">
            <div>x</div>
        </button>
        
    </div>
    `
    const deleteButton = itemCard.getElementsByClassName("delete-item-btn")[0];
    const toggleButton = itemCard.getElementsByClassName("toggle__input")[0];
   
    deleteButton.addEventListener('click', () => deleteItem(item.category, item.id));
    toggleButton.addEventListener('click', (e) => updateItem(e, item.category));
    itemsContainer.appendChild(itemCard)
}

export function displayItems(arr) {
    itemsContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createItemCard(arr[i])
    }
};

export function assignActiveClass() {
    // add window load event listener
    window.addEventListener('load', () => {
        // get window location pathname // / split pathname into segments

        const windowPath = window.location.pathname.split('/')
    
        // store last piece of segment in var
        const windowPathNameHREF = windowPath[2]
        console.log("windowPathNameHREF", windowPathNameHREF)
        // select anchor tag whose href attr is equal to path var
        // querySelectorAll([href=`./${}`])
        const activeHREF = document.querySelectorAll(`[href="./${windowPathNameHREF}"]`)[0];
        console.log("activeHREF", activeHREF)
        // add active class to that anchor tag
        activeHREF.classList.add('active');
        console.log('loaded', window.location.pathname);
    });

}
// export function addNavLinkActiveClass() {
//     // const navLinks = select all nav links w/ document.getElementsByClassname()
//     const navLinks = document.querySelectorAll('.crumb')
//     console.log(navLinks)

//     const onNavLinkClickTheme = (e) => {
//         e.preventDefault();
//         const clickedLink = e.target;
//         const href = clickedLink.attributes['href'];
//         console.log(clickedLink.attributes['href'])
//         navLinks.forEach(link => {
//             link.classList.remove('active');
//         });
//         clickedLink.classList.add('active');
//         window.location = `/public/must_tries.html`
//     }

//     for (let i = 0; i < navLinks.length; i++) {
//         navLinks[i].addEventListener('click', onNavLinkClickTheme)
//     }
// };