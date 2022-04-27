import { populateInfo } from "./appendData.js";

function loadPage() {
    const searchBtn = document.querySelector("#searchBtn");
    const inputBox = document.querySelector("#inputBox");
    const leftScroll = document.querySelectorAll(".leftScroll");
    const rightScroll = document.querySelectorAll(".rightScroll");

    inputBox.addEventListener("keydown", pressEnter);

    leftScroll.forEach(btn => btn.addEventListener("click", scrollLeft));
    rightScroll.forEach(btn => btn.addEventListener("click", scrollRight));

    function scrollLeft() {
        console.log('supleft');
    }

    function scrollRight() {
        console.log('supright');
    }


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
            await populateInfo(inputBox.value);
        }
    }

    populateInfo("Los Angeles");
}


export { loadPage };