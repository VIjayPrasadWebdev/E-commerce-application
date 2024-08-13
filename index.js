import GetElement from "./src/util.js";
import "./src/navbarToggle.js";
import "./src/mode.js";
import "./src/countdown.js";
import productsData from "./src/Data/productsdata.js";
import {
  DynamicData,
  DynamicData2,
  DynamicData3,
  DynamicData4,
  DynamicData5,
} from "./src/DisplayDynamicdata.js";
import { swiper1, swiper2 } from "./src/Swiper.js";
import { Store, SetupStore } from "./src/Data/store.js";
import newarrivalsdata1 from "./src/Data/arrivalsdata1.js";
import newarrivalsdata2 from "./src/Data/arrivalsdata2.js";
import toprateddata1 from "./src/Data/toprateddata1.js";
import toprateddata2 from "./src/Data/toprateddata2.js";
import trendingdata1 from "./src/Data/trendingdata1.js";
import trendingdata2 from "./src/Data/trendingdata2.js";
import sellerproductsdata from "./src/Data/sellerdata.js";
import toastr from "toastr";
import {
  DynamicStaticArrivalsdata,
  DynamicStaticArrivalsdata2,
} from "./src/Data/DynamicData/DynamicArrivalsdata.js";
import {
  DynamicStaticToprateddata,
  DynamicStaticToprateddata2,
} from "./src/Data/DynamicData/DynamicToprateddata.js";
import {
  DynamicStaticTrendingdata,
  DynamicStaticTrendingdata2,
} from "./src/Data/DynamicData/DynamicTrendingdata.js";
import { DynamicSellerdata } from "./src/Data/DynamicData/DynamicSellerdata.js";
import { DynamicStaticReviewsdata } from "./src/Data/DynamicData/DynamicReviews.js";
import reviewsdata from "./src/Data/Reviewsdata.js";
import Confetti from "./src/Cart/Confetti.js";
//import { SpecialData } from "./src/Data/Specialdata.js";
SetupStore(productsData);
//console.log(Store);
let filterproducts = Store.filter((store) => store.id <= 3);
//console.log(filterproducts);
DynamicData(filterproducts, GetElement(".products-container"));
let SpecialData1 = productsData.filter((store) => store.id >= 9);
let SpecialData2 = productsData.filter((store) => store.id === 10);
let SpecialData3 = productsData.filter((store) => store.id === 11);
let SpecialData4 = productsData.filter((store) => store.id === 12);
console.log(SpecialData1);
DynamicData2(SpecialData1, GetElement(".p-box-container"));
//DynamicData3(SpecialData2, GetElement(".p-box-container"));
//DynamicData4(SpecialData3, GetElement(".p-box-container"));
//DynamicData5(SpecialData4, GetElement(".p-box-container"));

let mode = GetElement(".light-icon svg");
mode.classList.add("light");
mode.addEventListener("click", () => {
  if (mode.classList.contains("light")) {
    mode.classList.remove("light");
    GetElement("html").classList.add("dark");
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;
  } else {
    mode.classList.add("light");
    GetElement("html").classList.remove("dark");
    mode.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;
  }
});

let mode2 = GetElement(".light-icon-sm svg");
mode2.classList.add("light");
mode2.addEventListener("click", () => {
  if (mode2.classList.contains("light")) {
    mode2.classList.remove("light");
    GetElement("html").classList.add("dark");
    mode2;
    mode2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;
  } else {
    mode2.classList.add("light");
    GetElement("html").classList.remove("dark");
    mode2.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;
  }
});

let url = "https://nextjs-restapi-zeta.vercel.app/api/products";
console.log(url);

async function API() {
  let response = await fetch(url, { mode: "no-cors" });

  let data = await response.json();
  return data;
}

//API();

let newArrivals1 = GetElement(".new-arrivals1");
let newArrivals2 = GetElement(".new-arrivals2");

DynamicStaticArrivalsdata(newarrivalsdata1, GetElement(".new-arrivals1"));

DynamicStaticArrivalsdata2(newarrivalsdata2, GetElement(".new-arrivals2"));
DynamicStaticToprateddata(toprateddata1, GetElement(".top-rated1"));
DynamicStaticToprateddata2(toprateddata2, GetElement(".top-rated2"));
DynamicStaticTrendingdata(trendingdata1, GetElement(".trending1"));
DynamicStaticTrendingdata2(trendingdata2, GetElement(".trending2"));
DynamicSellerdata(sellerproductsdata, GetElement(".seller-data"));
//DynamicStaticReviewsdata(reviewsdata, GetElement(".reviews-container"));
// DynamicSellerdata(sellerproductsdata, GetElement(".seller-box-container"));

// function perimeter(length, width) {
//   let rectangle = 2 * (length + width);
//   return rectangle;
// }
// console.log(perimeter(2, 3));
