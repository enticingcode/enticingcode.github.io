let log = console.log;
log("hello world")

let totalResult;
let firstOperand = "";
let secondOperand = ""
let firstOperator = null;
let secondOperator = null;

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
      if (firstOperator != null && secondOperator === null) {

        secondInput(e);
      }
      else if (firstOperator === null) {
        firstInput(e);
      }
      else secondInput(e);
    }
    );
  })
}

function firstInput(e) {
  firstOperand += e.target.innerText;
  screenText.innerText = firstOperand;
}

function secondInput(e) {
  secondOperand += e.target.innerText;
  screenText.innerText = secondOperand;
  calcPreview.innerText = `${firstOperand} ${firstOperator} ${secondOperand}`;

}
function operatorInput(e) {
  firstOperator = e.target.innerText;
  screenText.innerText = firstOperator;
}

operatorButtons.forEach((button) => {
  button.addEventListener('click', operatorInput);
})

equalsButton.addEventListener('click', calculate)
allClearButton.addEventListener('click', clearAll);



function clearAll() {
  firstOperand = "";
  secondOperand = "";
  firstOperator = null;
  secondOperator = null;
  screenText.innerText = "0";
  calcPreview.innerText = "";
}

function calculate() {
  let x = Number(firstOperand);
  let y = Number(secondOperand);
  let op = firstOperator;
  log(`${x} ${op} ${y}`);

  if (op === "*") {
    let result = x * y;
    result += totalResult;
  }
  else if (op === "+") {
    let result = x + y;
    result += totalResult;
  }
  else if (op === "-") {
    let result = x - y;
    result += totalResult;
  }
  else if (op === "/") {
    let result = x / y;
    result += totalResult;
  }
  return totalResult;
}




numbersBtns();


