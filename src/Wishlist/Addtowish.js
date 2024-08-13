import GetElement, {
  GetElements,
  GetLocalStorage,
  SetLocalStorage,
} from "../util.js";
import productsData from "../Data/productsdata.js";
import { producttowish } from "../navbarToggle.js";
import { productID } from "../Data/store.js";
import { AddtowishDOM } from "./AddtowishDOM.js";
let wishBadge = GetElements(".wish-badge");
let cartTotalPrice = GetElements(".checkout-price");
let wishLayoutcontainer = GetElement(".wish-data-layout");
let wishLayoutcontainerlg = GetElement(".wish-box-layout-lg");
// let wishMajorButtonsLg = GetElement(".wish-major-buttons-container-lg");
let wish = GetLocalStorage("wish");
export function Addtowish(id) {
  console.log(id);
  let findwishID = wish.find((wish) => wish.id == id);
  console.log(findwishID);
  if (!findwishID) {
    let product = productID(id);

    product = { ...product, amount: 1 };
    // console.log(product);
    wish = [...wish, product];
    console.log(wish);
    AddtowishDOM(product);
    SetLocalStorage("wish", wish);
  } else {
    alert("product already added in wishlist");
  }

  Badgecount();
  producttowish();
  SetLocalStorage("wish", wish);
}
function Badgecount() {
  let badgetotal = wish.reduce((total, wish) => {
    return (total += wish.amount);
  }, 0);
  // console.log("total", badgetotal);
  wishBadge.forEach((wishBadge) => {
    wishBadge.innerText = badgetotal;
  });
}

function RemoveItem(id) {
  wish = wish.filter((wish) => wish.id != id);
}

function DisplaywishinDOM() {
  wish.forEach((wishItem) => {
    AddtowishDOM(wishItem);
  });
}

function SetupwishFuntionality() {
  wishLayoutcontainer.addEventListener("click", (e) => {
    let parentElement = e.target.parentElement;
    let parentID = e.target.parentElement.dataset.id;
    console.log(parentElement, parentID);
    if (parentElement.classList.contains("wish-delete-btn")) {
      RemoveItem(parentID);
      parentElement.parentElement.remove();
    }
    Badgecount();
    SetLocalStorage("wish", wish);
  });
  wishLayoutcontainerlg.addEventListener("click", (e) => {
    let parentElement = e.target.parentElement;
    let parentID = e.target.parentElement.dataset.id;
    console.log(parentElement, parentID);
    if (parentElement.classList.contains("wish-delete-btn")) {
      console.log("sdfsd");

      RemoveItem(parentID);
      parentElement.parentElement.remove();
    }
    Badgecount();
    SetLocalStorage("wish", wish);
  });
  Badgecount();

  SetLocalStorage("wish", wish);
}

function init() {
  Badgecount();
  SetupwishFuntionality();
  DisplaywishinDOM();
}
init();
