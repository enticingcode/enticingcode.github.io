
function loadFood() {

    // HIDE INFORMATION BLOCK //
    let content = document.querySelector("#content");
    let infoDiv = document.querySelector("#info");
    let containerSelection = document.querySelector("#formContainer");

    if (infoDiv != null) {
        infoDiv.remove();
    }
    else if (containerSelection != null) {
        containerSelection.remove();
    }

    let resetImgDiv = document.querySelector("#imgContain");

    if (resetImgDiv != null) {
        resetImgDiv.remove();
    }


    // create picture container //
    let pics = ["/images/index.jpeg", "/images/pokepoke.jpg", "/images/Pokebowl.jpg"]
    let pictureDiv = document.createElement("div");
    pictureDiv.setAttribute("id", "imgContain");
    let picCaptions = ["Raw Aficionado", "Es-da-Mama's Greens", "The NavaMar Special"]

    for (let i = 0; i < 3; i++) {
        // create img divs //
        let figure = document.createElement("figure");
        let figureCap = document.createElement("figcaption");
        let newImage = document.createElement("img");

        newImage.src = `${pics[i]}`
        figureCap.innerText = `${picCaptions[i]}`
        newImage.classList.add("images");

        figure.append(newImage);
        figure.append(figureCap);




        // append items //
        pictureDiv.append(figure);
    }

    content.append(pictureDiv);

}



export { loadFood }