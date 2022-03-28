import { loadPage } from "./Modules/initial-load"
import { loadAbout } from "./Modules/about"
import { loadHome } from "./Modules/home"

loadPage();


const home = document.querySelector("#home");
const about = document.querySelector("#about");
const food = document.querySelector("#food");
const contact = document.querySelector("#contact");




home.addEventListener("click", loadHome);
about.addEventListener("click", loadAbout);

// food.addEventListener("click", loadFood);
// contact.addEventListener("click", loadContact);

