let log = console.log;
log("hello world")

let totalResult = 0;
let firstOperand = "";
let secondOperand = "";
let currentOperation = null;
let resetNumScreen = false;

const equalsButton = document.querySelector("#equal");
const allClearButton = document.querySelector("#clear");
const operatorButtons = document.querySelectorAll(".operators");
const numberButtons = document.querySelectorAll(".btn");
const screenNum = document.querySelector('#result');
const keyPad = document.querySelector('#numbers');
const calcPreview = document.querySelector("#calcPreview");
const subOps = document.querySelectorAll(".sub-ops");

//test


numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        appendNumber(e.target.value)
    })
})

operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        setOperation(e.target.value);
    });
})



function appendNumber(number) {
    if (screenNum.innerText === "0" || resetNumScreen)
        resetScreen();
    screenNum.innerText += number;
}

function setOperation(operator) {
    if (currentOperation === null) {
        currentOperation = operator;
        firstOperand = screenNum.innerText;
        calcPreview.innerText = `${firstOperand} ${currentOperation}`;
        resetNumScreen = true;
        log(`CurrentOperation: ${currentOperation}`);
    }
    else if (currentOperation != null) {
        calculate();
        firstOperand = screenNum.innerText;
        currentOperation = operator;
        calcPreview.innerText = `${firstOperand} ${currentOperation}`;
        resetNumScreen = true;
        log(`CurrentOperation: ${currentOperation}`);

    }


}




function resetScreen() {
    screenNum.innerText = "";
    resetNumScreen = false;
}

equalsButton.addEventListener('click', calculate);
allClearButton.addEventListener('click', clearAll);

function clearAll() {
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
    totalResult = 0;
    screenNum.innerText = "0";
    calcPreview.innerText = "";
    screenNum.style.fontSize = '25px';
}


function zeroDivision() {
    screenNum.innerText = "Can't divide by zero dumbass. Please clear all";
    screenNum.style.fontSize = '12px';
}
function calculate() {
    if (currentOperation == null || resetNumScreen) return
    if (currentOperation === "/" && screenNum.innerText === "0") {
        zeroDivision();
        return;
    }
    secondOperand = screenNum.innerText;
    screenNum.innerText = operate(firstOperand, currentOperation, secondOperand);
    calcPreview.innerText = `${firstOperand} ${currentOperation} ${secondOperand}`
    currentOperation = null;

}

function operate(x, op, y) {
    x = Number(x);
    y = Number(y);

    if (currentOperation != null) {
        switch (op) {
            case "*":
                totalResult = x * y;
                break;
            case "/":
                totalResult = x / y;
                break;
            case "+":
                totalResult = x + y;
                break;
            case "-":
                totalResult = x - y;
                break;
        }
        return totalResult;
    }
}


subOps.forEach((button) => {
    button.addEventListener('click', changeOperand)

})


function changeOperand(e) {
    if (e.target.value === "%") {
        firstOperand = Number(screenNum.innerText) / 100;
        screenNum.innerText = firstOperand;
    }
    else if (e.target.value === "sign") {
        firstOperand = Number(screenNum.innerText * -1);
        screenNum.innerText = firstOperand;
    }
}










// DO NOT DELETE////////////////////////////////////////////////////////////////////////////////////////////////

// let log = console.log;
// log("hello world")

// let totalResult = 0;
// let firstOperand = "";
// let secondOperand = "";
// let firstOperator = null;
// let secondOperator = null;
// let displayValue = 0;

// const equalsButton = document.querySelector("#equal");
// const allClearButton = document.querySelector("#clear");
// const operatorButtons = document.querySelectorAll(".operators");
// const numberButtons = document.querySelectorAll(".btn");
// const screenNum = document.querySelector('#result');
// const keyPad = document.querySelector('#numbers');
// const calcPreview = document.querySelector("#calcPreview");

// const subOps = document.querySelectorAll(".sub-ops");


// subOps.forEach((button) => {
//     button.addEventListener('click', changeOperand)

// })


// function changeOperand(e) {
//     if (e.target.value === "%") {
//         screenNum.innerText = Number(screenNum.innerText) / 100;
//     }
//     else if (e.target.value === "sign") {
//         screenNum.innerText = Number(screenNum.innerText * -1);
//     }
// }




// numberButtons.forEach((button) => {
//     button.addEventListener('click', numberInput)
// })

// operatorButtons.forEach((button) => {
//     button.addEventListener('click', operatorInput);
// })
// function operatorInput(e) {
//     if (firstOperator === null) {
//         firstOperator = e.target.value;
//         log(firstOperator);
//         log(`firstOp = ${firstOperator}, secondOp = ${secondOperator}`)
//         calcPreview.innerText += ` ${firstOperator} `;
//     }
//     else if (firstOperator != null && secondOperator === null) {
//         secondOperator = e.target.value;
//         totalResult = calculate(Number(firstOperand), Number(secondOperand), firstOperator);
//         firstOperand = totalResult;
//         secondOperand = "";
//         log(`firstOp = ${firstOperator}, secondOp = ${secondOperator}`)
//         calcPreview.innerText += ` ${secondOperator} `;
//     }
//     else if (firstOperator != null && secondOperator != null) {
//         secondOperator = e.target.value;
//         totalResult = calculate(Number(firstOperand), Number(secondOperand), secondOperator);
//         firstOperand = totalResult;
//         secondOperand = "";
//         log(`firstOp = ${firstOperator}, secondOp = ${secondOperator}`)
//         calcPreview.innerText += ` ${secondOperator} `;
//     }
// }


// function numberInput(e) {
//     if (firstOperator === null) {
//         firstOperand += e.target.value;
//         screenNum.innerText = firstOperand;
//         log(`firstNum = ${firstOperand}, secondNum = ${secondOperand}`);
//         calcPreview.innerText = `${firstOperand}`;


//     }
//     else if (firstOperand != "") {
//         secondOperand += e.target.value;
//         screenNum.innerText = secondOperand;
//         log(`firstNum = ${firstOperand}, secondNum = ${secondOperand}`);
//         calcPreview.innerText = `${secondOperand}`;
//     }



// }
// equalsButton.addEventListener('click', calculate)
// allClearButton.addEventListener('click', clearAll);

// function clearAll() {
//     firstOperand = "";
//     secondOperand = "";
//     firstOperator = null;
//     secondOperator = null;
//     screenNum.innerText = 0;
//     calcPreview.innerText = "";
//     totalResult = 0;

// }

// function calculate() {
//     x = Number(firstOperand);
//     y = Number(secondOperand);
//     op = firstOperator;
//     op2 = secondOperator;


//     let result;

//     if (op != null && op2 === null) {
//         switch (op) {
//             case "*":
//                 result = x * y;
//                 totalResult = result;
//                 break;
//             case "/":
//                 result = x / y;
//                 totalResult = result;
//                 break;
//             case "+":
//                 result = x + y;
//                 totalResult = result;
//                 break;
//             case "-":
//                 result = x - y;
//                 totalResult = result;
//                 break;

//         }
//     }
//     else if (op != null && op2 != null) {
//         switch (op2) {
//             case "*":
//                 result = x * y;
//                 log(x * y);
//                 totalResult = result;
//                 break;
//             case "/":
//                 result = x / y;
//                 totalResult = result;
//                 break;
//             case "+":
//                 result = x + y;
//                 totalResult = result;
//                 break;
//             case "-":
//                 result = x - y;
//                 totalResult = result;
//                 break;
//         }
//     }
//     log(x, op, y, totalResult)
//     screenNum.innerText = totalResult;
//     return totalResult;
// }
