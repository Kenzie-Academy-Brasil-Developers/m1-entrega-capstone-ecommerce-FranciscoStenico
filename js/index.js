// function addTag(name, parent, cls, id) {
//     const tagName = document.createElement(name)
//     const tagParent = document.querySelector(parent)

//     !!cls ? tagName.classList.add(cls) : null;
//     !!id ? tagName.id = id : null

//     tagParent.appendChild(tagName)
//     return tagName;
// }

// lista produtos
const main = document.querySelector('main')
for (let i = 0; i < data.length; i++) {
    let currImg = document.createElement('figure')
    currImg.id = `img${i + 1}`
    currImg.style.backgroundImage = `url(${data[i].img})`
    currImg.style.backgroundPosition = 'center'
    currImg.style.backgroundRepeat = 'no-repeat'
    currImg.style.backgroundSize = '79%'
    
    main.innerHTML += `
    <div class="product" id="${i + 1}">
        ${currImg.outerHTML}
        <div class="productDetails">
            <h5 class="tag">${(data[i].tag)[0]}</h5>
            <h2 class="nameItem">${data[i].nameItem}</h2>
            <p class="description">
              ${data[i].description}
            </p>
            <p class="value">R$${data[i].value.toFixed(2)}</p>
            <button id="add${i + 1}">Adicionar ao carrinho</button>
        </div>
    </div>
    `
}

function addToCart() {
    for (let i = 0; i < data.length; i++) {
        let currAddBtn = document.querySelector(`#add${i + 1}`)
        currAddBtn.addEventListener('click', () => {
            
        })
    }
}

// menu nav
const all = document.querySelector('#all')
const acessories = document.querySelector('#acessories')
const shoes = document.querySelector('#shoes')
const shirts = document.querySelector('#shirts')
