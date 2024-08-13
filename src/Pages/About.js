// import "/src/navbarToggle.js";
import "../mode.js";
import gallerydata from "../Data/gallerypicdata.js";
import GetElement from "../util.js";
import { DynamicStaticGallerydata } from "../Data/DynamicData/DynamicGallerypics.js";

DynamicStaticGallerydata(gallerydata, GetElement(".gallery-pic-inner"));
