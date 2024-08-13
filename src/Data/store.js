import { GetLocalStorage, SetLocalStorage } from "../util";
let Store = GetLocalStorage("store");

function SetupStore(data) {
  Store = data.map((data) => {
    return data;
  });
  // console.log(Store);
  SetLocalStorage("store", Store);
  //console.log(Store);
}
//console.log(Store);
function productID(id) {
  let product = Store.find((product) => product.id == id);
  console.log(product);
  return product;
}
export { Store, SetupStore, productID };
