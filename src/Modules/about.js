

function loadAbout() {
    let infoDiv = document.querySelector("#info");
    infoDiv.innerHTML = "";
    infoDiv.style.display = "block";
    let para = document.createElement("p");
    para.setAttribute("id", "aboutInfo");
    para.innerText = "At NavaMar we pride ourselves in preparing and serving up the freshest ingredients into your Poke Bowls."
    infoDiv.append(para);
    console.log("defined");
}


export { loadAbout }