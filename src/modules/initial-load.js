import { populateInfo } from "./appendData.js";

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
            selectedCity = await populateInfo(inputBox.value);
        }
    }




    populateInfo("Los Angeles");
}


export { loadPage };