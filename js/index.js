const main = document.querySelector("main");

function listEverything() {
  main.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let currImg = document.createElement("figure");
    currImg.id = `img${i + 1}`;
    currImg.style.backgroundImage = `url(${data[i].img})`;
    currImg.style.backgroundPosition = "center";
    currImg.style.backgroundRepeat = "no-repeat";
    currImg.style.backgroundSize = "79%";

    main.innerHTML += `
        <div class="product" id="${i + 1}">
            ${currImg.outerHTML}
            <div class="productDetails">
                <h5 class="tag">${data[i].tag[0]}</h5>
                <h2 class="nameItem">${data[i].nameItem}</h2>
                <p class="description">
                    ${data[i].description}
                </p>
                <p class="value">R$${data[i].value.toFixed(2)}</p>
                <button class="addButton" id="${
                  i + 1
                }">Adicionar ao carrinho</button>
            </div>
        </div>
        `;
  }
}
listEverything();

// menu nav
const all = document.querySelector("#all");
all.addEventListener("click", listEverything);

const acessories = document.querySelector("#acessories");
acessories.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Acessórios");
});

const shoes = document.querySelector("#shoes");
shoes.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Calçados");
});

const shirts = document.querySelector("#shirts");
shirts.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Camisetas");
});

function filterTag(category) {
  main.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    let currImg = document.createElement("figure");
    currImg.id = `img${i + 1}`;
    currImg.style.backgroundImage = `url(${data[i].img})`;
    currImg.style.backgroundPosition = "center";
    currImg.style.backgroundRepeat = "no-repeat";
    currImg.style.backgroundSize = "79%";

    if (data[i].tag[0] == category) {
      main.innerHTML += `
              <div class="product" id="${i + 1}">
                  ${currImg.outerHTML}
                  <div class="productDetails">
                      <h5 class="tag">${data[i].tag[0]}</h5>
                      <h2 class="nameItem">${data[i].nameItem}</h2>
                      <p class="description">
                        ${data[i].description}
                      </p>
                      <p class="value">R$${data[i].value.toFixed(2)}</p>
                      <button class="addButton" id="${
                        i + 1
                      }">Adicionar ao carrinho</button>
                  </div>
              </div>
              `;
    }
  }
}

const addButtons = document.querySelectorAll(".addButton");
const cartDetails = document.querySelector("#cartDetails");
const hide = document.querySelector(".hide");

var totalQuant = 0;
var totalPrice = 0;

// adicionando itens no carrinho
var allSelected = [];
for (let i = 0; i < data.length; i++) {
    let currBtn = addButtons[i];
    currBtn.addEventListener("click", (event) => {
        event.preventDefault();
        
        allSelected.push(data[currBtn.id - 1]);
        console.log(data[currBtn.id - 1].img);
        console.log(data[currBtn.id - 1].nameItem);
        console.log(data[currBtn.id - 1].value);
        if (allSelected.length > 0) {
            hide.style.display = "none"
        }
        
        cartDetails.insertAdjacentHTML('beforeend', `
            <div class="itemSelected" id="select${i + 1}">
                ${currImg.outerHTML}
                <div class="selectText" id="select${i + 1}Details">
                    <h5>${data[currBtn - 1].nameItem}</h5>
                    <p class="selectValue">R$${data[currBtn - 1].value}</p>
                    <h6 class="remove" id="rmv${i + 1}">Remover produto</h6>
                </div>
            </div>
        `);
  });
}