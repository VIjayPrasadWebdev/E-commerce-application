import GetElement from "../util.js";
import productsData from "../Data/productsdata.js";
let cartLayoutcontainer = GetElement(".cart-box-layout");
let cartLayoutcontainerLg = GetElement(".cart-box-layout-lg");
export function AddtocartDOM({ id, img, producttype, productname, price }) {
  //console.log(productname);
  let cartDatabox = document.createElement("div");
  cartDatabox.className =
    "cart-data-box flex items-center w-screen justify-between  gap-0 relative";
  cartDatabox.setAttribute("data-id", id);

  cartDatabox.innerHTML = `<img src="${img}" alt="pic" class="pic h-24 w-24 p-2 rounded-sm">
          <div class="cart-details flex flex-col justify-center items-center gap-1 mr-6">
 <p class="cart-product-name font-DM text-xl">${productname}</p>
  <div class="flex items-center text-xs gap-1">Rs.<p class="text-sm text-red-600 font-medium price-data"> ${price}</p></div>

  
          </div>
          <div class="cart-btn-container flex flex-col items-center absolute right-14">
  <button class="up-btn" data-id=${id}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <p class="cart-value" data-id=${id}>1</p>

  <button class="down-btn" data-id=${id}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</div>
          <button class="cart-delete-btn" data-id=${id}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-og-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
          </button>`;
  //let cartLayout = GetElement(".cart-box-layout");
  //cartLayout.prepend(product);
  let cartDataboxlg = document.createElement("div");
  cartDataboxlg.className =
    "cart-data-box flex items-center  justify-between relative";
  cartDataboxlg.setAttribute("data-id", id);

  cartDataboxlg.innerHTML = `<img src="${img}" alt="pic" class="pic h-24 w-24 p-2 rounded-sm object-contain">
          <div class="cart-details flex flex-col  justify-center items-center gap-1">
  <p class="cart-product-type text-xs">${producttype}</p>
 <p class="cart-product-name font-DM text-xl">${productname}</p>
  <div class="text-center flex items-center text-xs gap-1">Rs.<p class="text-sm text-red-600 font-medium price-data"> ${price}</p></div>

  
          </div>
          <div class="cart-btn-container flex flex-col items-center absolute right-20">
  <button class="up-btn" data-id=${id}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>

  <p class="cart-value-lg" data-id=${id}>1</p>

  <button class="down-btn" data-id=${id}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
  </button>
</div>
          <button class="cart-delete-btn" data-id=${id}>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-og-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>
          </button>`;
  cartLayoutcontainer.prepend(cartDatabox);
  cartLayoutcontainerLg.prepend(cartDataboxlg);
}
