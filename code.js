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


function addFirstListener() {
  numberButtons.forEach((button) => {
    button.addEventListener('click', firstInput);
  })
}

function removeFirstListener() {
  numberButtons.forEach((button) => {
    button.removeEventListener('click', firstInput);
  })
}
function addSecondListener() {
  numberButtons.forEach((button) => {
    button.addEventListener('click', secondInput);
  })
}
function removeSecondListener() {
  numberButtons.forEach((button) => {
    button.removeEventListener('click', secondInput);
  })
}

operatorButtons.forEach((button) => {
  button.addEventListener('click', operatorInput);
})

equalsButton.addEventListener('click', calculate)
allClearButton.addEventListener('click', clearAll);



function clearAll() {
  firstOperand = "";
  secondOperand = "";
  operator = null;
  screenText.innerText = "";
  removeSecondListener();
  addFirstListener();
}

function calculate(e) {
  // if ()
  log(`${Number(firstOperand)} ${operator} ${Number(secondOperand)}`);
}

function operatorInput(e) {
  screenText.innerText = e.target.innerText;
  operator = e.target.innerText;
  removeFirstListener();
  addSecondListener();
}

function firstInput(e) {
  screenText.innerText += e.target.innerText;
  firstOperand += e.target.innerText;
}

function secondInput(e) {

  screenText.innerText += e.target.innerText;
  secondOperand += e.target.innerText;

}

addFirstListener();

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