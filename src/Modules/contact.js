

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


    let formReqs = ["First Name", "Last Name", "E-Mail", "Phone Number", "Message"]


    if (containerSelection != null) {
        containerSelection.remove();
    }

    for (let i = 0; i < 5; i++) {
        let formInput = document.createElement("input");
        formInput.type = "text";
        formInput.id = `${formReqs[i]}`
        formInput.placeholder = `${formReqs[i]}`
        formContainer.append(formInput);
    }


    let submitBTN = document.createElement("button");
    submitBTN.setAttribute("id", "submitBtn");
    submitBTN.innerText = "Submit"

    formContainer.append(submitBTN);
    content.append(formContainer);

    function alertVisitor() {
        alert("dang, the button's broken, I guess no Poke for u")
    }

    submitBTN.addEventListener("click", alertVisitor)


}



export { loadContact };