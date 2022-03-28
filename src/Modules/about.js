let content = document.querySelector("#content");

function createSummary(id, content) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.textContent = content;
    return div;
}


let brief = "About info here"

function loadAbout() {
    let infoDiv = createSummary("info", brief)
    content.append(infoDiv);
}





export { loadAbout };