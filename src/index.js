import { fetchCityData } from "./modules/fetchAPI.js";
import { loadPage } from "./modules/initial-load.js";



loadPage();

//this needs to be used via addEventListener on initial load //
fetchCityData();

