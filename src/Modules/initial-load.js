let log = console.log;


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










function loadPage() {
    let content = document.querySelector("#content");
    let header = createHeader("header", "Bienvenidos a NavaMar");
    let videoContainer = loadBanner();
    content.append(videoContainer);
    content.append(header);
}











export { loadPage }; 