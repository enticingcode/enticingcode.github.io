

function loadContact() {
    let content = document.querySelector("#content");
    let infoDiv = document.querySelector("#info");
    let resetImgDiv = document.querySelector("#imgContain");

    if (infoDiv != null) {
        infoDiv.remove();

    }
    else if (resetImgDiv != null) {
        resetImgDiv.remove();
    }

    let formContainer = document.createElement("div");
    formContainer.setAttribute("id", "formContainer");
    let containerSelection = document.querySelector("#formContainer");


    let formReqs = ["First Name:", "Last Name:", "E-Mail:", "Phone Number:", "Message:"]


    if (containerSelection != null) {
        containerSelection.remove();
    }
    for (let i = 0; i < 5; i++) {
        let formInput = document.createElement("input");
        formInput.type = "text";
        formContainer.append(formInput);
    }

    content.append(formContainer);



}



export { loadContact };