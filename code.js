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
    firstOperand = screenNum.innerText;
    log(`FirstOP: ${firstOperand}`);

    // else if (screenNum.innerText != "0" && currentOperation != null) 
    //     resetScreen();
    //     screenNum.innerText += number;
    //     secondOperand = screenNum.innerText;
    //     log(`SecondOP: ${secondOperand}`);
    //     calculate();

}

function setOperation(operator) {
    if (currentOperation === null) {
        currentOperation = operator;
        calcPreview.innerText = `${firstOperand} ${currentOperation}`;
        calculate();
        resetNumScreen = true;
    }
    else if (currentOperation != null) {
        calculate();
        firstOperand = totalResult;
        currentOperation = operator;
        calcPreview.innerText = `${firstOperand} ${currentOperation}`;
        log(`CurrentOperation: ${currentOperation}`);

    }


}




function resetScreen() {
    screenNum.innerText = "";
}

equalsButton.addEventListener('click', (e) => {
    log(e.target.value);
    calculate();
    screenNum.innerText = totalResult;
    firstOperand = totalResult;
    currentOperation = null;
})
allClearButton.addEventListener('click', clearAll);

function clearAll() {
    firstOperand = "";
    secondOperand = "";
    currentOperation = null;
    totalResult = 0;
    screenNum.innerText = "0";
    calcPreview.innerText = "";
}

function calculate() {

    if (currentOperation == null || resetNumScreen) return
    secondOperand = screenNum.innerText;



    // let x = Number(firstOperand);
    // let y = Number(secondOperand);
    // if (currentOperation != null) {
    //     switch (currentOperation) {
    //         case "*":
    //             totalResult = x * y;
    //             break;
    //         case "/":
    //             totalResult = x / y;
    //             break;
    //         case "+":
    //             totalResult = x + y;
    //             break;
    //         case "-":
    //             totalResult = x - y;
    //             break;
    //     }
    //     return totalResult;
    // }

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
