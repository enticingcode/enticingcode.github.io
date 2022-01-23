let log = console.log;
log("hello world")


let firstOperand = "";
let secondOperand = "";
let operator = null;

const equalsButton = document.querySelector("#equal")
const allClearButton = document.querySelector("#clear")
const operatorButtons = document.querySelectorAll(".operators")
const numberButtons = document.querySelectorAll(".btn")
const screenText = document.querySelector('#result');
const keyPad = document.querySelector('#numbers');


// let operatorText = keyPad.addEventListener('click', operatorInput);

let calculation = equalsButton.addEventListener('click', calc);


operatorButtons.forEach((button) => {
    button.addEventListener('click', operatorInput);
})





function operatorInput(e) {
    screenText.innerText = e.target.innerText;
      operator = e.target.innerText;
      numberButtons.forEach((button) => {
        button.addEventListener('click', secondOperand);
    })
}

function numberInput(e) {
      screenText.innerText += e.target.innerText;
        calculation = e.target.innerText;
        firstOperand += e.target.innerText;
}

function secondOperand (e) {
    screenText.innerText += e.target.innerText;
      firstOperand += e.target.innerText;
}



// const add = function(x, y) {
//     return x + y;
// }

// const subtract = function(x, y) {
//     return x - y;
// }

// const divide = function(x, y) {
//     return x / y;
// }

// const multiply = function(x, y) {
//     return x * y;
// }

// let btn = document.querySelectorAll(".btn").forEach(function(e) {
//     e.addEventListener("click", function() {
//         this.style.backgroundColor = "red";
//     })
// });