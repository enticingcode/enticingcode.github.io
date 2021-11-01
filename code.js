let log = console.log;
log("hello world")




const equalsButton = document.querySelector("#equal")
const allClearButton = document.querySelector("#clear")

const operatorButtons = Array.from(document.getElementsByClassName("operators"))
const numberButtons = Array.from(document.getElementsByClassName("btn"))


operatorButtons.map(function (button) {
    button.addEventListener("click", function (e) {
        console.log(e);
        console.log(e.target);
        log(e.target.innerText);
    })
})
numberButtons.map(button => {
    button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
})})

let firstOperandText = 




const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const divide = function(x, y) {
    return x / y;
}

const multiply = function(x, y) {
    return x * y;
}

// let btn = document.querySelectorAll(".btn").forEach(function(e) {
//     e.addEventListener("click", function() {
//         this.style.backgroundColor = "red";
//     })
// });