let log = console.log;
log("hello world")

let totalResult = 0;
let firstOperand = "";
let secondOperand = "";
let firstOperator = null;
let secondOperator = null;

const equalsButton = document.querySelector("#equal")
const allClearButton = document.querySelector("#clear")
const operatorButtons = document.querySelectorAll(".operators")
const numberButtons = document.querySelectorAll(".btn")
const screenNum = document.querySelector('#result');
const keyPad = document.querySelector('#numbers');
const calcPreview = document.querySelector("#calcPreview")



numberButtons.forEach((button) => {
    button.addEventListener('click', numberInput)
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', operatorInput);
})
function operatorInput(e) {
    if (firstOperator === null) {
        firstOperator = e.target.value;
        log(firstOperator);
        log(`firstOp = ${firstOperator}, secondOp = ${secondOperator}`)

    }
    else if (firstOperator != null && secondOperator === null) {
        secondOperator = e.target.value;
        totalResult = calculate(Number(firstOperand), Number(secondOperand), firstOperator);
        firstOperand = totalResult;
        secondOperand = "";
        log(`firstOp = ${firstOperator}, secondOp = ${secondOperator}`)

    }
    else if (firstOperator != null && secondOperator != null) {
        secondOperator = e.target.value;
        totalResult = calculate(Number(firstOperand), Number(secondOperand), secondOperator);
        firstOperand = totalResult;
        secondOperand = "";
        log(`firstOp = ${firstOperator}, secondOp = ${secondOperator}`)

    }
    // firstOperator = e.target.innerText;
    // calcPreview.innerText += firstOperator;
}


function numberInput(e) {
    if (firstOperand === "") {
        firstOperand += e.target.value;
        screenNum.innerText = firstOperand;
        log(`firstNum = ${firstOperand}, secondNum = ${secondOperand}`);

    }
    else if (firstOperand != "" && secondOperand == "") {
        secondOperand += e.target.value;
        screenNum.innerText = secondOperand;
        log(`firstNum = ${firstOperand}, secondNum = ${secondOperand}`);

    }
    else if (firstOperand != "" && secondOperand != "") {
        log('hi');
    }


}
equalsButton.addEventListener('click', calculate)
allClearButton.addEventListener('click', clearAll);

function clearAll() {
    firstOperand = "";
    secondOperand = "";
    firstOperator = null;
    secondOperator = null;
    screenNum.innerText = 0;
    calcPreview.innerText = "";
    totalResult = 0;

}

function calculate() {
    x = Number(firstOperand);
    y = Number(secondOperand);
    op = firstOperator;
    op2 = secondOperator;


    let result;

    if (op != null && op2 === null) {
        switch (op) {
            case "*":
                result = x * y;
                totalResult = result;
                break;
        }
    }
    else if (op != null && op2 != null) {
        switch (op2) {
            case "*":
                result = x * y;
                log(x * y);
                totalResult = result;
                break;
        }
    }
    calcPreview.innerText = `${x} ${op} ${y}`;
    log(x, op, y, totalResult)
    screenNum.innerText = totalResult;
    return totalResult;
}




