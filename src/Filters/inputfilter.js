import GetElement from "../util.js";
import productsData from "../Data/productsdata.js";
import { DynamicData } from "../DisplayDynamicdata.js";

let inputfilter = GetElement(".search-product");
inputfilter.addEventListener("keyup", () => {
  let value = inputfilter.value;
  //console.log(value);

  if (value) {
    let searchedproduct = productsData.filter(({ productname }) => {
      let updatedproductname = productname.toLowerCase();

      if (updatedproductname.startsWith(value)) {
        return productname;
      }
    });
    DynamicData(searchedproduct, GetElement(".products-container"));
    console.log(searchedproduct);
    if (searchedproduct.length < 1) {
      let productsContainer = GetElement(".products-container");
      productsContainer.innerHTML = `<h1 class="text-black  dark:text-white">Sorry There is no products matched your search </h1>`;
    }
  } else {
    DynamicData(productsData, GetElement(".products-container"));
  }
});
