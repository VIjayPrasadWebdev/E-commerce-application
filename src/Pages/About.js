// import "/src/navbarToggle.js";
import { Notyf } from "notyf";
import "../mode.js";
import gallerydata from "../Data/gallerypicdata.js";
import GetElement, { GetElements } from "../util.js";
import { DynamicStaticGallerydata } from "../Data/DynamicData/DynamicGallerypics.js";
import "/src/navbarToggle.js";
import "../Data/DynamicData/DynamicSellerdata.js";
import "../util.js";
import { DynamicSellerdata } from "../Data/DynamicData/DynamicSellerdata.js";
import sellerproductsdata from "../Data/sellerdata.js";
DynamicSellerdata(sellerproductsdata, GetElement(".seller-data"));
DynamicStaticGallerydata(gallerydata, GetElement(".gallery-pic-inner"));
let Special2024Lg = GetElement(".dropdown-container2");
let Special2024sm = GetElement(".mobile-special-dropdown");
let SettingsLg = GetElement(".dropdown-container3");
let Settingsm = GetElement(".mobile-settings-dropdown");
let categorySvgicon = GetElements(".category-dashboard-links svg");
Special2024Lg.addEventListener("click", (e) => {
  e.preventDefault();
  PageConstruction(e);
  alert("This page is under construction");
});
Special2024sm.addEventListener("click", (e) => {
  e.preventDefault();
  PageConstruction(e);
  alert("This page is under construction");
});
SettingsLg.addEventListener("click", (e) => {
  e.preventDefault();
  PageConstruction(e);
  alert("This page is under construction");
});
Settingsm.addEventListener("click", (e) => {
  e.preventDefault();
  PageConstruction(e);
  alert("This page is under construction");
});

categorySvgicon.forEach((svgicon) => {
  svgicon.addEventListener("click", (e) => {
    PageConstruction(e);
    alert("This page is under construction");
  });
});
function PageConstruction(e) {
  e.preventDefault();

  // Create an instance of Notyf
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "center",
      y: "top",
    },
    types: [
      {
        type: "error",
        background: "#f59e0b",
        color: "black",
        duration: 2000,
        className: "material-icons toast",
        tagName: "",
        dismissible: true,
      },
    ],
  });

  // Display an error notification
  notyf.error("This page is under construction");
}
