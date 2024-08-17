import GetElement, {
  GetElements,
  GetLocalStorage,
  SetLocalStorage,
} from "../util.js";
import productsData from "../Data/productsdata.js";
import { AddtocartDOM } from "./AddtocartDOM.js";
import { producttocart } from "../navbarToggle.js";
import { productID } from "../Data/store.js";
let cartBadge = GetElements(".cart-badge");
let cartTotalPrice = GetElements(".checkout-price");
let cartLayoutcontainer = GetElement(".cart-box-layout");
let cartLayoutcontainerLg = GetElement(".cart-box-layout-lg");
let clearcartBtn = GetElements(".clear-cart-btn");
let cart = GetLocalStorage("cart");
let cartdataBox = GetElements("cart-data-box");

export function Addtocart(id) {
  let finditem = cart.find((cart) => cart.id == id);
  //console.log("cart", cartBadge);
  //console.log(finditem);
  //console.log(finditem);
  // localStorage.getItem("cart");
  if (!finditem) {
    let product = productID(id);
    // console.log(product);
    product = { ...product, amount: 1 };
    // console.log(product);

    // console.log(cartproduct);
    cart = [...cart, product];
    //console.log(product);
    AddtocartDOM(product);

    //console.log(product);
    //  console.log("cart data", updatedcart);
    SetLocalStorage("cart", cart);
  } else {
    let Amount = increaseCount(id);
    console.log("Amount", Amount);
    let CartValue = [...cartLayoutcontainer.querySelectorAll(".cart-value")];
    let CartValueLg = [
      ...cartLayoutcontainerLg.querySelectorAll(".cart-value-lg"),
    ];
    console.log(CartValue, CartValueLg);
    let NewAmount = CartValue.find((CartValue) => CartValue.dataset.id == id);
    let NewAmountLg = CartValueLg.find(
      (CartValue) => CartValue.dataset.id == id
    );
    console.log("NewAmount", NewAmount);
    console.log("NewAmount", NewAmountLg);

    NewAmount.innerText = Amount;
    NewAmountLg.innerText = Amount;
  }

  // console.log(cart);
  producttocart();
  Badgecount();
  TotalPricecount();
  SetLocalStorage("cart", cart);
  // if (cart == "") {
  //   cartLayoutcontainer.innerHTML = `<h1>No items </h1>`;
  //   console.log(cart);
  // }
}
function Badgecount() {
  let badgetotal = cart.reduce((total, cart) => {
    return (total += cart.amount);
  }, 0);
  // console.log("total", badgetotal);
  cartBadge.forEach((cartBadge) => {
    cartBadge.textContent = badgetotal;
  });
}
function TotalPricecount() {
  let Pricecount = cart.reduce((total, cart) => {
    return (total += cart.price * cart.amount);
  }, 0);
  cartTotalPrice.forEach((cartTotalPrice) => {
    cartTotalPrice.textContent = Pricecount;
  });
}
function DisplayCartItemsinDOM() {
  cart.forEach((cartItem) => {
    AddtocartDOM(cartItem);
  });
}
function increaseCount(id) {
  let Amount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      Amount = cartItem.amount + 1;
      cartItem = { ...cartItem, amount: Amount };
    }
    return cartItem;
  });
  return Amount;
}
// function SetupCartFuntionality() {}

function SetupCartFuntionality() {
  cartLayoutcontainer.addEventListener("click", (e) => {
    TotalPricecount();
    let element = e.target;
    let parentElement = e.target.parentElement;
    let id = e.target.dataset.id;
    let parentID = e.target.parentElement.dataset.id;
    console.log(element);
    // console.log(parentID);
    // console.log(parentElement);
    if (parentElement.classList.contains("cart-delete-btn")) {
      parentElement.parentElement.remove();
      RemoveItem(parentID);
      //  console.log(parentID);
    }

    if (parentElement.classList.contains("up-btn")) {
      let increase = increaseCount(parentID);
      console.log(increase);
      let SiblingElement = parentElement.nextElementSibling;
      SiblingElement.innerText = increase;
      console.log(SiblingElement);
      TotalPricecount();
    }

    if (parentElement.classList.contains("down-btn")) {
      let decrease = decreaseCount(parentID);
      console.log(decrease);
      let Cartcount = parentElement.previousElementSibling;
      if (decrease == 0) {
        RemoveItem(parentID);
        // console.log(parentID);
        parentElement.parentElement.parentElement.remove();
      } else {
        Cartcount.innerText = decrease;
      }
    }

    if (element.classList.contains(".clear-cart-btn")) {
      RemoveItem(parentID);
    }

    Badgecount();
    TotalPricecount();
    SetLocalStorage("cart", cart);
  });

  cartLayoutcontainerLg.addEventListener("click", (e) => {
    let element = e.target;
    let parentElement = e.target.parentElement;
    let id = e.target.dataset.id;
    let parentID = e.target.parentElement.dataset.id;
    console.log(parentID);
    console.log(parentElement);
    if (parentElement.classList.contains("cart-delete-btn")) {
      parentElement.parentElement.remove();
      RemoveItem(parentID);
      //  console.log(parentID);
    }

    if (parentElement.classList.contains("up-btn")) {
      let increase = increaseCount(parentID);
      console.log(increase);
      let SiblingElement = parentElement.nextElementSibling;
      SiblingElement.textContent = increase;
      console.log(SiblingElement);
    }

    if (parentElement.classList.contains("down-btn")) {
      let decrease = decreaseCount(parentID);
      console.log(decrease);
      let Cartcount = parentElement.previousElementSibling;
      if (decrease == 0) {
        RemoveItem(parentID);
        // console.log(parentID);
        parentElement.parentElement.parentElement.remove();
      } else {
        Cartcount.innerText = decrease;
      }
    }

    Badgecount();
    TotalPricecount();
    clearcart();
    SetLocalStorage("cart", cart);
  });

  Badgecount();
  TotalPricecount();
  SetLocalStorage("cart", cart);
}

function decreaseCount(id) {
  let Amount;
  cart = cart.map((cartItem) => {
    if (cartItem.id == id) {
      Amount = cartItem.amount - 1;
      cartItem = { ...cartItem, amount: Amount };
    }
    return cartItem;
  });
  return Amount;
}

function RemoveItem(id) {
  cart = cart.filter((cart) => cart.id != id);
}

function clearcart() {
  clearcartBtn.forEach((clearcartBtn) => {
    clearcartBtn.addEventListener("click", () => {
      // console.log(cartLayoutcontainer);

      // cartLayoutcontainer.SiblingElement.remove();
      cart = [];
      alert("Cart is Empty");
      alert("Please reload the page");
      // cart = [];
    });
  });
  // cart = [];
}
clearcart();
// function Init() {
//   Badgecount();
//   TotalPricecount();
//   SetupCartFuntionality();
//   cart.forEach((cartItem) => {
//     AddtocartDOM(cartItem);
//   });
// }
// Init();

function Init() {
  console.log("cart", cart);
  Badgecount();
  TotalPricecount();
  DisplayCartItemsinDOM();
  SetupCartFuntionality();
}
Init();
