import { fetchCityData, fetchData } from "./fetchAPI.js";
import { getWeatherData } from "./fetchAPI.js";
import { format } from "date-fns";
let capitalize = require("capitalize");

function loadPage() {
    const searchBtn = document.querySelector("#searchBtn");
    const inputBox = document.querySelector("#inputBox");
    inputBox.addEventListener("keydown", pressEnter);

    let selectedCity;
    let cityWeather;
    function pressEnter(evt) {
        if (evt.keyCode === 13) {
            searchBtn.click();
        }
    }

    searchBtn.addEventListener("click", validateInput);

    async function validateInput() {
        if (inputBox.value == "") {
            inputBox.setCustomValidity("Please enter a city");
            inputBox.reportValidity();
        }
        else if (!inputBox.value.includes("/^\d+$/")) {
            selectedCity = await populateInfo(inputBox.value);
        }
    }



    async function populateInfo(city) {
        const currentCondition = document.querySelector("#currentCondition");
        const cityName = document.querySelector("#cityName");
        const dateTime = document.querySelector("#dateTime");
        const currentTemp = document.querySelector("#currentTemp");
        const changeFormat = document.querySelector("#changeTempFormat");


        cityWeather = await getWeatherData(city);
        currentCondition.innerText = capitalize.words(cityWeather.current.weather[0].description);

        selectedCity = await fetchCityData(city);
        console.log(selectedCity);

        // CLEAN THIS UP SOMEHOW //
        cityName.innerText = capitalize.words(`${selectedCity.cityInfo.name}, ${selectedCity.cityInfo.state}, ${selectedCity.cityInfo.country}`)
        let todaysDate = format(new Date(), "MMMM dd, yyyy");
        console.log(todaysDate);
        dateTime.innerText = todaysDate;
        currentTemp.innerText = Math.round(cityWeather.current.temp) + "°F";

    }
    populateInfo("Los Angeles");
}


export { loadPage };