import "/src/navbarToggle.js";
import "../mode.js";
import { DynamicData } from "../DisplayDynamicdata";
import productsData from "../Data/productsdata";
import GetElement from "../util";
DynamicData(productsData, GetElement(".products-container"));
import "../Filters/categoryfilter.js";
import "../Filters/inputfilter.js";
import "../Filters/pricefilter.js";
