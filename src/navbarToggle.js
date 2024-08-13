import GetElement from "./util.js";

let hamburgerbtn = GetElement(".hamburger-btn");
// let hamburgerClose = GetElement(".mobile-hamburger-close-btn");
let menulinks = GetElement(".menu-links");
let dashboardbtn = GetElement(".dashboard-btn");
//let subCategory = GetElement(".sub-category");
let dashboardlinks = GetElement(".dashboard-links");
let cartData = GetElement(".cart-data-container");
let LgcartData = GetElement(".cart-data-container-lg");
let wishData = GetElement(".wishlist-data-container");
let LgwishData = GetElement(".wishlist-data-container-lg");
let cartbtn = GetElement(".cart-btn");
let wishbtn = GetElement(".wish-btn");
let Lgwishbtn = GetElement(".wish-btn-lg");
let Lgcartbtn = GetElement(".cart-btn-lg");
let LgcartClosebtn = GetElement(".cart-close-btn-lg");
let LgwishClosebtn = GetElement(".wish-close-btn-lg");
let Mobilecategoriescontainer = GetElement(".mobile-categories-dropdown");
let Mobilespecialcontainer = GetElement(".mobile-special-dropdown");
let Mobilesettingscontainer = GetElement(".mobile-settings-dropdown");
let Mobileoptioncontainer = GetElement(".mobile-language-option-container");

// Javascript will rule this world ....

hamburgerbtn.addEventListener("click", () => {
  menulinks.classList.toggle("menu-active");
});

// hamburgerClose.addEventListener("click", () => {
//   menulinks.classList.remove("menu-active");
// });

dashboardbtn.addEventListener("click", () => {
  dashboardlinks.classList.toggle("dashboard-active");
});

// dashboardClose.addEventListener("click", () => {
//   dashboardlinks.classList.remove("dashboard-active");
// });

cartbtn.addEventListener("click", () => {
  cartData.classList.toggle("cart-active");
});

wishbtn.addEventListener("click", () => {
  wishData.classList.toggle("wish-active");
});

Lgcartbtn.addEventListener("click", () => {
  LgcartData.classList.add("cart-active-lg");
});

// subCategory.addEventListener("click", (e) => {
//   let target = e.target.parentElement.parentElement;
//   console.log(target);
//   if (target.classList.contains(".plus-icon")) {
//     alert("sdfds");
//   }
// });

function producttocart() {
  let screenSize = window.matchMedia("(max-width:768px)");
  //console.log(screenSize);
  if (screenSize.matches) {
    cartData.classList.toggle("cart-active");
  } else {
    LgcartData.classList.add("cart-active-lg");
  }
}

function producttowish() {
  let screenSize = window.matchMedia("(max-width:768px)");
  //console.log(screenSize);
  if (screenSize.matches) {
    wishData.classList.toggle("wish-active");
  } else {
    LgwishData.classList.add("wish-active-lg");
  }
}

LgcartClosebtn.addEventListener("click", () => {
  LgcartData.classList.remove("cart-active-lg");
});

Lgwishbtn.addEventListener("click", () => {
  LgwishData.classList.add("wish-active-lg");
});

LgwishClosebtn.addEventListener("click", () => {
  LgwishData.classList.remove("wish-active-lg");
});

let plusicon = GetElement(".plus-icon-btn");
let dropdownMobileNav1 = GetElement(".dropdown-mobile-sub-1");
let dropdownMobileNav2 = GetElement(".dropdown-mobile-sub-2");
let dropdownMobileNav3 = GetElement(".dropdown-mobile-sub-3");
let dropdownMobileNav4 = GetElement(".dropdown-mobile-sub-4");
let dropdownMobileNav5 = GetElement(".dropdown-mobile-sub-5");
let dropdownMobileNav6 = GetElement(".language-dropdown1");
let special = GetElement(".mobile-special-dropdown");
let settings = GetElement(".mobile-settings-dropdown");
plusicon.classList.add("addplusicon");
let Mobilemenulinks = GetElement(".menu-links");
Mobilecategoriescontainer.addEventListener("click", (e) => {
  e.preventDefault();
  let ParentElement = e.target.parentElement;
  let Element = e.target;
  console.log(ParentElement);

  //ParentElement.classList.add("addplusicon");
  if (ParentElement.classList.contains("plus-icon-btn")) {
    // console.log("Hooooooooooooy");

    if (ParentElement.classList.contains("addplusicon")) {
      ParentElement.classList.remove("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /> </svg>`;
      dropdownMobileNav1.classList.add("active");
      dropdownMobileNav2.classList.add("active");
      dropdownMobileNav3.classList.add("active");
    } else {
      ParentElement.classList.add("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />

          </svg>`;
      dropdownMobileNav1.classList.remove("active");
      dropdownMobileNav2.classList.remove("active");
      dropdownMobileNav3.classList.remove("active");
    }
  }
});
Mobilespecialcontainer.addEventListener("click", (e) => {
  e.preventDefault();
  let ParentElement = e.target.parentElement;
  let Element = e.target;
  console.log(ParentElement);

  //ParentElement.classList.add("addplusicon");
  if (ParentElement.classList.contains("plus-icon-btn")) {
    // console.log("Hooooooooooooy");

    if (ParentElement.classList.contains("addplusicon")) {
      ParentElement.classList.remove("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /> </svg>`;
      dropdownMobileNav4.classList.add("active2");
    } else {
      ParentElement.classList.add("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />

          </svg>`;
      dropdownMobileNav4.classList.remove("active2");
    }
  }
});
Mobilesettingscontainer.addEventListener("click", (e) => {
  e.preventDefault();
  let ParentElement = e.target.parentElement;
  let Element = e.target;
  console.log(ParentElement);

  //ParentElement.classList.add("addplusicon");
  if (ParentElement.classList.contains("plus-icon-btn")) {
    // console.log("Hooooooooooooy");

    if (ParentElement.classList.contains("addplusicon")) {
      ParentElement.classList.remove("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /> </svg>`;
      dropdownMobileNav5.classList.add("active3");
    } else {
      ParentElement.classList.add("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />

          </svg>`;
      dropdownMobileNav5.classList.remove("active3");
    }
  }
});
Mobilesettingscontainer.addEventListener("click", (e) => {
  e.preventDefault();
  let ParentElement = e.target.parentElement;
  let Element = e.target;
  console.log(ParentElement);

  //ParentElement.classList.add("addplusicon");
  if (ParentElement.classList.contains("plus-icon-btn")) {
    // console.log("Hooooooooooooy");

    if (ParentElement.classList.contains("addplusicon")) {
      ParentElement.classList.remove("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /> </svg>`;
      dropdownMobileNav5.classList.add("active3");
    } else {
      ParentElement.classList.add("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />

          </svg>`;
      dropdownMobileNav5.classList.remove("active3");
    }
  }
});
Mobileoptioncontainer.addEventListener("click", (e) => {
  e.preventDefault();
  let ParentElement = e.target.parentElement;
  let Element = e.target;
  console.log(ParentElement);

  //ParentElement.classList.add("addplusicon");
  if (ParentElement.classList.contains("plus-icon-btn")) {
    // console.log("Hooooooooooooy");

    if (ParentElement.classList.contains("addplusicon")) {
      ParentElement.classList.remove("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" /> </svg>`;
      dropdownMobileNav6.classList.add("active2");
    } else {
      ParentElement.classList.add("addplusicon");
      ParentElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />

          </svg>`;
      dropdownMobileNav6.classList.remove("active2");
    }
  }
});

export { producttocart, producttowish };
