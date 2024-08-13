import GetElement from "../util.js";
import productsData from "../Data/productsdata.js";
import { DynamicData } from "../DisplayDynamicdata.js";
let pricerange = GetElement(".price-range");
let pricetext = GetElement(".price-text");
let pricelist = productsData.map(({ price }) => price);
console.log(pricelist);

let maxprice = Math.max(...pricelist);
//maxprice = Math.ceil(maxprice / 100);
console.log(maxprice);
pricerange.max = maxprice;
pricerange.value = maxprice;
pricerange.min = 0;
pricetext.innerText = `Value : Rs. ${maxprice}`;

pricerange.addEventListener("input", () => {
  let pricevalue = parseInt(pricerange.value);
  console.log(pricevalue);
  pricetext.innerText = `Value : Rs. ${pricevalue}`;
  let inputpricefilter = productsData.filter(
    ({ price }) => price <= pricevalue
  );
  DynamicData(inputpricefilter, GetElement(".products-container"));
  if (inputpricefilter.length < 1) {
    let productsContainer = GetElement(".products-container");
    productsContainer.innerHTML = `<h1 class="text-black  dark:text-white">Sorry There is no products matched your price range </h1>`;
  }
});
