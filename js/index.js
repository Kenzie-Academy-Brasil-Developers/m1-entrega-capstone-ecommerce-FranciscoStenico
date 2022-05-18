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
    <h2 class="nameItem" id="NI${i + 1}">${data[i].nameItem}</h2>
    <p class="description">
    ${data[i].description}
    </p>
    <p class="value" id="V${i + 1}">R$${data[i].value.toFixed(2)}</p>
      <button class="addButton" id="${i}">Adicionar ao carrinho</button>
      </div>
      </div>
      `;
  }
}
listEverything();

const cartDetails = document.querySelector("#cartDetails");
const hide = document.querySelector(".hide");

let totalQuant = 0;
let totalPrice = 0;

// adicionando itens no carrinho
let allSelected = [];

function addButtonFunction(category = "") {
  const addButtons = document.querySelectorAll(".addButton");
  addButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      let idNum = parseInt(button.id);
      let itemCount = 0;
      if (allSelected.filter((i) => i == idNum).length == 0) {
        allSelected.push(idNum);
        addToCart(idNum, category, itemCount);
        formatCart();

        const remove = document.querySelector(`#rmv${category + idNum}`);
        remove.addEventListener("click", (event) => {
          event.preventDefault();

          let removeSelect = remove.parentNode.parentNode;
          removeSelect.parentNode.removeChild(removeSelect);

          allSelected.pop();
          formatCart();
        });
      } else {
        
      }
    });
  });
}
addButtonFunction();

function formatCart() {
  if (allSelected.length > 0) {
    hide.style.display = "none";
    cartDetails.style.justifyContent = "flex-start";
    cartDetails.style.alignItems = "flex-start";
  } else if (allSelected.length == 0) {
    hide.style.display = "flex";
    cartDetails.style.justifyContent = "center";
    cartDetails.style.alignItems = "center";
  }
}

function addToCart(btnID, category, quantity) {
  quantity++;
  let qtCount = document.createElement("p");
  qtCount.classList.add("quantCount");
  qtCount.id = `QC${btnID}`;
  qtCount.innerHTML = `Qtd.: <strong>${quantity}</strong>`

  cartDetails.insertAdjacentHTML(
    "beforeend",
    `
      <div class="itemSelected" id="select${category + btnID}">
        ${document.querySelector(`#img${btnID + 1}`).outerHTML}
        <div class="selectText" id="select${btnID + 1}Details">
          <h5>${document.querySelector(`#NI${btnID + 1}`).innerText}</h5>
          <p class="selectValue">${
            document.querySelector(`#V${btnID + 1}`).innerText
          }</p>
          ${qtCount.outerHTML}
          <h6 class="remove" id="rmv${category + btnID}">Remover produto</h6>
        </div>
      </div>
    `
  );
}

// menu nav
const all = document.querySelector("#all");
all.addEventListener("click", (event) => {
  event.preventDefault();
  listEverything();
  addButtonFunction("All");
});

const acessories = document.querySelector("#acessories");
acessories.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Acessórios");
  addButtonFunction("Acs");
});

const shoes = document.querySelector("#shoes");
shoes.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Calçados");
  addButtonFunction("Shoe");
});

const shirts = document.querySelector("#shirts");
shirts.addEventListener("click", (event) => {
  event.preventDefault();
  filterTag("Camisetas");
  addButtonFunction("Shirt");
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
                      <h2 class="nameItem" id="NI${i + 1}">${
        data[i].nameItem
      }</h2>
                      <p class="description">
                        ${data[i].description}
                      </p>
                      <p class="value" id="V${i + 1}">R$${data[i].value.toFixed(
        2
      )}</p>
                      <button class="addButton" id="${i}">Adicionar ao carrinho</button>
                  </div>
              </div>
              `;
    }
  }
}

//remover itens
// function removeItem(array) {
//   const remove = document.querySelectorAll(".remove");
//   remove.forEach((button) => {
//     button.addEventListener("click", (event) => {
//       event.preventDefault();

//       let selectMatch = button.parentNode.parentNode;
//       selectMatch.parentNode.removeChild(selectMatch);
//     });
//   });
// }
