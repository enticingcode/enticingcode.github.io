
function loadFood() {

    // HIDE INFORMATION BLOCK //
    let content = document.querySelector("#content");
    let infoDiv = document.querySelector("#info");
    infoDiv.innerHTML = "";
    infoDiv.style.display = "none";

    let resetImgDiv = document.querySelector("#imgContain");

    if (resetImgDiv != null) {
        resetImgDiv.remove();
    }


    // create picture container //
    let pics = ["/images/index.jpeg", "/images/pokepoke.jpg", "/images/Pokebowl.jpg"]
    let pictureDiv = document.createElement("div");
    pictureDiv.setAttribute("id", "imgContain");


    for (let i = 0; i < 3; i++) {
        // create img divs //
        let newImage = document.createElement("img");
        newImage.src = `${pics[i]}`
        newImage.classList.add("images");

        // append items //
        pictureDiv.append(newImage);
    }

    content.append(pictureDiv);

}



export { loadFood }