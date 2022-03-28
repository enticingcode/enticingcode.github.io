let briefInfo = "Welcome to Northwest Arkansas's best Poke Experience!"
const contentDiv = document.querySelector("#content");


function createSummary(id, content) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.textContent = content;
    return div;
}

function loadHome() {
    let homeBrief = createSummary("info", briefInfo);
    contentDiv.append(homeBrief);
}









export { loadHome }; 