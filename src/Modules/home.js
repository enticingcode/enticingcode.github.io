let briefInfo = "Welcome to Northwest Arkansas's best Poke Experience!"


function createSummary(id, content) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.textContent = content;
    return div;
}

function loadHome() {
    let homeBrief = createSummary("info", briefInfo);
    content.append(homeBrief);
}









export { loadHome }; 