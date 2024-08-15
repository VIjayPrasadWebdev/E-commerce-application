import { Notyf } from "notyf";

export function GetElement(selector) {
  let element = document.querySelector(selector);

  if (element) {
    return element;
  } else throw Error(`There is no element called ${selector}`);
}

export function GetElements(selector) {
  let elements = document.querySelectorAll(selector);
  if (elements) {
    return elements;
  } else throw Error(`There is no element called ${selector}`);
}
export default GetElement;

export function SetLocalStorage(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}

export function GetLocalStorage(item) {
  let Storagedata = localStorage.getItem(item);
  if (Storagedata) {
    Storagedata = JSON.parse(localStorage.getItem(item));
  } else {
    Storagedata = [];
  }
  return Storagedata;
}

let NavbarlinkLg = GetElements(".navbar-lg a");
let Navbarlinksm = GetElements(".navbar-sm a");
let Special2024Lg = GetElement(".dropdown-container2");
let Special2024sm = GetElement(".mobile-special-dropdown");
let SettingsLg = GetElement(".dropdown-container3");
let Settingsm = GetElement(".mobile-settings-dropdown");
let categorySvgicon = GetElements(".category-dashboard-links svg");

NavbarlinkLg.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
Navbarlinksm.forEach((link) => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

Special2024Lg.addEventListener("click", (e) => {
  PageConstruction(e);
});
Special2024sm.addEventListener("click", (e) => {
  PageConstruction(e);
});
SettingsLg.addEventListener("click", (e) => {
  PageConstruction(e);
});
Settingsm.addEventListener("click", (e) => {
  PageConstruction(e);
});

categorySvgicon.forEach((svgicon) => {
  svgicon.addEventListener("click", (e) => {
    PageConstruction(e);
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

console.log(Special2024Lg, Special2024sm);
