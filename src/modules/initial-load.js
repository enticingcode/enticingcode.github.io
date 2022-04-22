import { fetchCityData } from "./fetchAPI.js";
let capitalize = require('capitalize');


function loadPage() {
    const searchBtn = document.querySelector("#searchBtn");
    const inputBox = document.querySelector("#inputBox");
    inputBox.addEventListener("keydown", pressEnter);

    let selectedCity;

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
            selectedCity = await fetchCityData(inputBox.value);
        }

        // SELECTEDCITY NOW HAS OBJECT INFO //
    }

    async function defaultWeather() {
        const currentCondition = document.querySelector("#currentCondition");
        const cityName = document.querySelector("#cityName");
        const dateTime = document.querySelector("#dateTime");
        const currentTemp = document.querySelector("#currentTemp");
        const changeFormat = document.querySelector("#changeTempFormat");


        selectedCity = await fetchCityData("Fayetteville");
        console.log(selectedCity);
        currentCondition.innerText = capitalize(selectedCity.current.weather[0].description);

    }

    defaultWeather();



}


export { loadPage };