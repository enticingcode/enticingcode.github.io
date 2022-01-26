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
const calcPreview = document.querySelector("#calcPreview")

// function removeFirstListener() {
//   numberButtons.forEach((button) => {
//     button.removeEventListener('click', firstInput);
//   })
// }
// function addSecondListener() {
//   numberButtons.forEach((button) => {
//     button.addEventListener('click', secondInput);
//   })
// }
// function removeSecondListener() {
//   numberButtons.forEach((button) => {
//     button.removeEventListener('click', secondInput);
//   })
// }


function numbersBtns() {
  numberButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
      if (operator === null) {
        firstInput(e);
      } else {
        secondInput(e);
      }
    });
  })
}

function firstInput(e) {
  firstOperand += e.target.innerText;
  screenText.innerText = firstOperand;
  log(firstOperand)
}

function secondInput(e) {
  secondOperand += e.target.innerText;
  screenText.innerText = secondOperand;
  calcPreview.innerText = `${firstOperand} ${operator} ${secondOperand}`;

}
function operatorInput(e) {
  operator = e.target.innerText;
  screenText.innerText = operator;
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
  calcPreview.innerText = "";
}

function calculate(e) {
  if (operator === "*") {
    log(multiply(firstOperand, secondOperand));
  }
  else if (operator === "+") {
    log(add(Number(firstOperand), Number(secondOperand)));
  }
  else if (operator === "-") {
    log(subtract(Number(firstOperand), Number(secondOperand)));
  }
  else if (operator === "/") {
    log(divide(Number(firstOperand), Number(secondOperand)));
  }


  log(`${Number(firstOperand)} ${operator} ${Number(secondOperand)}`);
}




// function firstInput(e) {
//   screenText.innerText = e.target.innerText;
//   firstOperand += e.target.innerText;
// }

// function secondInput(e) {

//   screenText.innerText += e.target.innerText;
//   secondOperand += e.target.innerText;
// }

numbersBtns();



const add = function (x, y) {
  let result = x + y;
  return screenText.innerText = result;
}

const substract = function (x, y) {
  let result = x - y;
  return screenText.innerText = result;
}

const divide = function (x, y) {
  let result = x / y;
  return screenText.innerText = result;
}

const multiply = function (x, y) {
  let result = x * y;
  return screenText.innerText = result;
}

// let btn = document.querySelectorAll(".btn").forEach(function(e) {
//     e.addEventListener("click", function() {
//         this.style.backgroundColor = "red";
//     })
// });