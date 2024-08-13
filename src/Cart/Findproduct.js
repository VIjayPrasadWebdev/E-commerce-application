import productsData from "../Data/productsdata";
//console.log(productsData);
function findproductID(id) {
  let product = productsData.find((product) => product.id === id);

  //  console.log("product", product);
}
export { findproductID };
