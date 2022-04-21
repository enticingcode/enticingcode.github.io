import { fetchWeatherData, fetchCityData } from "./modules/fetchAPI.js";
import { loadPage } from "./modules/initial-load.js";



loadPage();
fetchCityData("Los Angeles");
fetchWeatherData(lat, lon);
