let log = console.log;
log("hello world")

let displayValue = 0;
let firstOperand = null;
let secondOperand = null;
let operator = null;

const equalsButton = document.querySelector("#equal")
const allClearButton = document.querySelector("#clear")
const operatorButtons = document.querySelectorAll(".operators")
const numberButtons = document.querySelectorAll(".btn")
const screenText = document.querySelector('#result');
const keyPad = document.querySelector('#numbers');
const calcPreview = document.querySelector("#calcPreview")



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
  screenText.innerText = "0";
  calcPreview.innerText = "";
}

function calculate() {
  let x = Number(firstOperand);
  let y = Number(secondOperand);
  let op = operator;
  log(`${x} ${operator} ${y}`);

  if (operator === "*") {
    let result = x * y;
    console.log(screenText.innerText = result);
  }
  else if (operator === "+") {
    let result = x * y;
    return screenText.innerText = result;
  }
  else if (operator === "-") {
    let result = x * y;
    return screenText.innerText = result;
  }
  else if (operator === "/") {
    let result = x * y;
    return screenText.innerText = result;
  }

}




numbersBtns();


