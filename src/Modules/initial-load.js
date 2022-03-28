let content = document.querySelector("#content");


function createHeader(id, content) {
    const header = document.createElement("header");
    header.setAttribute("id", id);
    let logoText = document.createElement("h1");
    logoText.textContent = content;
    header.append(logoText);
    return header
}

function loadBanner() {
    // banner container //
    let banner = document.createElement("div");
    banner.setAttribute('id', "videoContainer");

    // banner video // 
    let video = document.createElement("video");
    video.src = "/video/POKEVID.mp4"
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.setAttribute('id', 'videoBanner');

    // append video to container //
    banner.append(video);
    return banner;
}

function createBtns(className, content, id) {
    let button = document.createElement("button");
    button.className = className;
    button.textContent = content;
    button.setAttribute("id", id);
    return button;
}

function loadNav(id) {
    let navBar = document.createElement("nav");
    navBar.setAttribute('id', id);
    let homeBtn = createBtns("navBtn", "Home", "home");
    let aboutUs = createBtns("navBtn", "About", "about");
    let foodBtn = createBtns("navBtn", "Food", "food");
    let contact = createBtns("navBtn", "Contact", "contact");
    navBar.append(homeBtn);
    navBar.append(aboutUs);
    navBar.append(foodBtn);
    navBar.append(contact);
    return navBar;
}



function createSummary(id, content) {
    let div = document.createElement("div");
    div.setAttribute("id", id);
    div.textContent = content;
    return div;
}


// WORKING ON THIS ////////////////////////////////////
function appendVideos() {
    let videoDiv = document.createElement("div");
    let video = document.createElement("video");
    video.src
}

function loadPage() {
    // Header & Vid // 
    let header = createHeader("header", "Bienvenidos a NavaMar");
    let videoContainer = loadBanner();

    // Nav Bar //
    let navBar = loadNav("navBar")
    content.append(videoContainer);
    content.append(header);
    content.append(navBar);

    // Brief Summary //
    let briefInfo = "Welcome to Northwest Arkansas's best Poke Experience!"
    let homeBrief = createSummary("info", briefInfo);
    content.append(homeBrief);


}










export { loadPage, content }; 