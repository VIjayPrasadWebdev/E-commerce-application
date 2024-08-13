// import "/src/navbarToggle.js";
import "../mode.js";
import gallerydata from "../Data/gallerypicdata.js";
import GetElement from "../util.js";
import { DynamicStaticGallerydata } from "../Data/DynamicData/DynamicGallerypics.js";
import "/src/navbarToggle.js";
import "../util.js";
DynamicStaticGallerydata(gallerydata, GetElement(".gallery-pic-inner"));
