import { fetchCityData, fetchData } from "./fetchAPI.js";
import { getWeatherData } from "./fetchAPI.js";
import { format } from "date-fns";
let capitalize = require("capitalize");
import { unixTimeConversion } from "./unixTimeConvert.js";

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

        // ASIDE CONTENT //
        const currentCondition = document.querySelector("#currentCondition");
        const cityName = document.querySelector("#cityName");
        const dateTime = document.querySelector("#dateTime");
        const currentTemp = document.querySelector("#currentTemp");
        const changeFormat = document.querySelector("#changeTempFormat");

        cityWeather = await getWeatherData(city);
        currentCondition.innerText = capitalize.words(cityWeather.current.weather[0].description);

        selectedCity = await fetchCityData(city);

        // CLEAN THIS UP SOMEHOW //
        cityName.innerText = capitalize.words(`${selectedCity.cityInfo.name}, ${selectedCity.cityInfo.state}, ${selectedCity.cityInfo.country}`)
        let todaysDate = format(new Date(), "MMMM dd, yyyy");
        dateTime.innerText = todaysDate;
        currentTemp.innerText = Math.round(cityWeather.current.temp) + "°F";

        // MAIN CONTENT (HOURLY & DAILY) //
        const currentWeather = document.querySelector("#currentWeather");
        const hourlyForecast = document.querySelector("#hourlyForecast");
        const futureWeather = document.querySelector("#futureWeather");
        const weeklyForecast = document.querySelector("#weeklyForecast");

        let hourlyArr = cityWeather.hourly;

        for (let i = 0; i < hourlyArr.length; i++) {
            const hourCard = document.createElement("div");
            hourCard.classList.add("hourCard");

            const infoDiv = document.createElement("div");
            infoDiv.classList.add("info");

            const time = document.createElement("p");
            const deg = document.createElement("p");

            time.append(unixTimeConversion(hourlyArr[i].dt))
            deg.append(Math.round(cityWeather.hourly[i].temp) + " °F")
            // console.log(deg);

            infoDiv.append(time);
            infoDiv.append(deg);
            hourCard.append(infoDiv);
            hourlyForecast.append(hourCard);
        }

        unixTimeConversion(1650920400)
    }
    populateInfo("Los Angeles");
}


export { loadPage };