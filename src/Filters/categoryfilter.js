import GetElement from "../util.js";
import productsData from "../Data/productsdata.js";
import { DynamicData } from "../DisplayDynamicdata.js";
let BtnContainer = GetElement(".btn-container");
console.log(BtnContainer);

let Dynamicbtns = [
  "All",
  ...new Set(productsData.map(({ producttype }) => producttype)),
];
console.log(Dynamicbtns);

BtnContainer.innerHTML = Dynamicbtns.map((Dynamicbtn) => {
  return `<button data-id=${Dynamicbtn} class="hover:text-og-red text-black font-medium font-DM dark:text-white">${Dynamicbtn}</button>`;
}).join(" ");

BtnContainer.addEventListener("click", (e) => {
  let target = e.target;
  // console.log(target);
  let productID = target.dataset.id;
  console.log(target.innerText);
  // console.log(producttype);
  let filtercategory;
  if (productID === "All") {
    DynamicData(productsData, GetElement(".products-container"));
  } else {
    filtercategory = productsData.filter(
      ({ producttype }) => producttype === target.innerText
    );
  }
  console.log(filtercategory);
  return DynamicData(filtercategory, GetElement(".products-container"));
});
