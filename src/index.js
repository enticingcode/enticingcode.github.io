import { fetchWeatherData, fetchyCityData } from "./modules/fetchAPI.js";
import { loadPage } from "./modules/initial-load.js";



loadPage();
fetchyCityData("Los Angeles");