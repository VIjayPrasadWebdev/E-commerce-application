import GetElement from "../util.js";
import productsData from "../Data/productsdata.js";
let wishLayoutcontainer = GetElement(".wish-data-layout");
let wishLayoutcontainerlg = GetElement(".wish-box-layout-lg");
let wishMajorButtonsLg = GetElement(".wish-major-buttons-container-lg");
console.log(wishMajorButtonsLg);

export function AddtowishDOM({ id, img, productname, price }) {
  //console.log(productname);
  let wishDatabox = document.createElement("div");
  wishDatabox.className =
    "wish-data-box flex items-center w-full justify-between p-3 gap-3";
  wishDatabox.setAttribute("data-id", id);
  wishDatabox.innerHTML = `  <img src="${img}" alt="pic" class="pic h-24 w-24 p-2  rounded-sm">
          <div class="cart-details flex flex-col items-center gap-1">
 <p class="cart-product-name font-DM text-xl">${productname}</p>
  <div class="flex items-center text-xs gap-1">Rs.<p class="text-sm text-red-600 font-medium price-data"> 
  ${price}</p></div>

  
          </div>
         
          <button class="wish-delete-btn" data-id=${id}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-og-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
          </button>`;
  //let cartLayout = GetElement(".cart-box-layout");
  //cartLayout.prepend(product);
  //  wishLayoutcontainer.append(wishDatabox);

  let wishDataboxlg = document.createElement("div");
  wishDataboxlg.className =
    "wish-data-box flex items-center w-full justify-between p-3 gap-3";
  wishDataboxlg.setAttribute("data-id", id);
  wishDataboxlg.innerHTML = `  <img src="${img}" alt="pic" class="pic h-24 w-24 p-2 rounded-sm object-contain">
          <div class="cart-details flex flex-col items-center gap-1">
 <p class="cart-product-name font-DM text-xl">${productname}</p>
  <div class="flex items-center text-xs gap-1">Rs.<p class="text-sm text-red-600 font-medium price-data"> 
  ${price}</p></div>

  
          </div>
         
          <button class="wish-delete-btn" data-id=${id}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-og-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
          </button>`;

  //let cartLayout = GetElement(".cart-box-layout");
  //cartLayout.prepend(product);
  wishLayoutcontainer.append(wishDatabox);
  // wishMajorButtonsLg.prepend(wishDataboxlg);
  wishLayoutcontainerlg.append(wishDataboxlg);
}
