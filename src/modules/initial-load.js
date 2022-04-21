import { fetchCityData } from "./fetchAPI.js";


function loadPage() {

    const searchBtn = document.querySelector("#searchBtn");
    const inputBox = document.querySelector("#inputBox");

    inputBox.addEventListener("keydown", pressEnter);

    function pressEnter(evt) {
        if (evt.keyCode === 13) {
            searchBtn.click();
        }
    }

    searchBtn.addEventListener("click", validateInput);


    async function validateInput() {
        if (inputBox.value == "") {
            console.log("Please enter valid city");
        }
        else if (inputBox != "") {
            fetchCityData(inputBox.value);
        }

    }





    // function defaultWeather() {

    // }


}


export { loadPage };