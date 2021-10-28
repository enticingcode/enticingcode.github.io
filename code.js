let log = console.log;
log("hello world")


const numberButtons = document.querySelectorAll(".btn")
const operatorButtons = document.querySelectorAll(".operators")
const equalsButton = document.querySelector("#equal")
const allClearButton = document.querySelector("#clear")





log(numberButtons, operatorButtons, equalsButton, allClearButton)



let operator = function() {

}


// log(btn);

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