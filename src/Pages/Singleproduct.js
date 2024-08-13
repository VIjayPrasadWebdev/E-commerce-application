import "/src/navbarToggle.js";
import "../mode.js";
import GetElement from "../util";
import productsData from "../Data/productsdata";
import { producttocart } from "../navbarToggle";
import { Addtocart } from "../Cart/Addtocart.js";
import { Store } from "../Data/store.js";
//console.log(productsData);
let { id, img, price, productname } = Store;
//let SingleProductContainer = GetElement(".single-product-container");
let URLID = window.location.search.split("?id=").join(" ");
let updatedURLID = Number(URLID);
let singleProductURL = `${window.location.href}`;

if (singleProductURL.endsWith(URLID)) {
  console.log("Batman");
}

//console.log(URLID);
//console.log(singleProductURL);
//let updatedproductdata = { ...productsData };
//console.log(updatedproductdata);

// let PictureDOM = GetElement(".product-picture");
// let TitleDOM = GetElement(".product-title");
// let PriceDOM = GetElement(".product-price");

// if (id === URLID) {
//   PictureDOM.src = img;
//   TitleDOM.innerText = productname;
//   PriceDOM.innerText = price;
// }
function SingleProduct(element, Store) {
  element.innerHTML = Store.map(({ id, img, price, productname }) => {
    return `<div class="single-product p-6 h-auto w-auto bg-white dark:bg-black" data-id=${id}>
         <div class="left-side grid grid-cols-1 justify-center items-center place-items-center w-full bg-winter rounded-sm">
        <div class="flex justify-center items-center">
          <img src=${img} alt="pic" class="w-96 h-auto object-cover product-picture  rounded-sm">
        </div>
       
    </div>
    <div class="right-side flex flex-col justify-between w-full h-full p-6 gap-4">
        <div class="name-data flex flex-col gap-3">
            <p class="product-title  font-medium text-3xl text-black dark:text-white">${productname}</p>
        
    
              <div class="price-data flex items-center gap-3">
                <p class=" text-red-600 font-bold text-2xl">
                  <span class="new-price">&#8377;</span>${price}
                </p>
                <p class="line-through text-lg text-slate-400">
                  <span class="old-price">&#8377;</span>2500</p>
                  <p class="discount-text1 text-green-600 font-medium">40% Off</p>
              </div>
           
      
            
                <div class="product-star-container flex items-center text-yellow-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-yellow-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-yellow-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-yellow-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 fill-yellow-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                  <p class="text-slate-600 ml-2">(41)</p>
                </div>
           
          </div>
            
          <hr class="  border-0 bg-slate-300 line">
           <p class="product-desc text-slate-600 dark:text-slate-200">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias harum quas explicabo sequi, laboriosam doloremque animi eos sit ex aspernatur. Provident commodi eligendi doloremque dolore ad excepturi praesentium fuga.
          </p>
     <hr class="  border-0 bg-slate-300 line">
          <div class="product-rules flex flex-col gap-6 text-black dark:text-white">
            <p class="flex gap-2 product-rules-text"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-500">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg> 1 Year AL Jazeera Brand Warranty</p>
      
      
            <p class="flex gap-2 product-rules-text">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
              30 Day Return Policy</p>
      
      
            <p class="flex gap-2 product-rules-text"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-600">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Cash on Delivery available</p>
          </div>
          
          <hr class="  border-0 bg-slate-300 line">
          <div class="size container flex items-center   lg:flex-row  flex-col   lg:gap-14 gap-5"> 

            <div class="size-data flex items-center gap-3">
              <p class="size-text text-black dark:text-white">Size</p>
    
              <div class="size-btn-container flex items-center gap-4">
                <button class="sizebtn border-solid border-2 h-10 w-10  dark:text-white hover:text-white  hover:bg-og-red text-slate-500">XS</button>
                <button class="sizebtn border-solid border-2 h-10 w-10  dark:text-white hover:text-white  hover:bg-og-red text-slate-500">S</button>
                <button class="sizebtn border-solid border-2 h-10 w-10  dark:text-white hover:text-white  hover:bg-og-red text-slate-500">M</button>
                <button class="sizebtn border-solid border-2 h-10 w-10  dark:text-white hover:text-white  hover:bg-og-red text-slate-500">L</button>
                <button class="sizebtn border-solid border-2 h-10 w-10  dark:text-white hover:text-white  hover:bg-og-red text-slate-500">XL</button>
              </div>
      
            </div> 
    </div>
      <hr class="  border-0 bg-slate-300 line">
    <button class="shop-btn flex items-center justify-center  gap-1 font-BtnFont bg-og-red text-white px-3 py-2 h-10 rounded-sm font-semibold hover:bg-black hover:dark:bg-little-dark hover:text-white" data-id=${id}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>Add to Cart</button>
    </div>
    </div>`;
  }).join(" ");

  element.addEventListener("click", (e) => {
    let parentElement = e.target;
    let id = e.target.dataset.id;
    console.log(id);

    if (parentElement.classList.contains("shop-btn")) {
      //   Addtocart(id);
    }
  });
}

let uniqueID = Store.filter(({ id }) => {
  return id == updatedURLID;
});
console.log(uniqueID);

SingleProduct(GetElement(".single-product-container"), uniqueID);

let Shopbtn = GetElement(".shop-btn");
Shopbtn.addEventListener("click", (e) => {
  let id = e.target.dataset.id;
  console.log(id);
  Addtocart(id);
});

//console.log(SingleProductContainer);
