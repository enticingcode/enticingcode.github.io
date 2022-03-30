let content = document.querySelector("#content");

function loadAbout() {
    let resetImgDiv = document.querySelector("#imgContain");
    let infoDivSelector = document.querySelector("#info");
    let containerSelection = document.querySelector("#formContainer");

    if (resetImgDiv != null) {
        resetImgDiv.remove();
    }

    else if (infoDivSelector != null) {
        console.log(infoDivSelector);
        console.log(containerSelection);
        infoDivSelector.remove();
    }
    else if (containerSelection != null) {
        containerSelection.remove();
    }



    let infoDiv = document.createElement("div");
    infoDiv.setAttribute("id", "info");

    let para = document.createElement("p");
    para.setAttribute("id", "aboutInfo");
    para.innerText = `At NavaMar we pride ourselves in preparing and serving up the freshest ingredients into your Poke Bowls. New Locations opening soon! `
    infoDiv.append(para);
    content.append(infoDiv);

}


export { loadAbout }