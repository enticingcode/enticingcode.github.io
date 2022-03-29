import { loadPage } from "./initial-load";

function loadHome() {
    let content = document.querySelector("#content");
    content.innerHTML = "";
    loadPage();
    console.log("itowrks");

}


export { loadHome }; 