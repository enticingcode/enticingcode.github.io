let log = console.log;

// const nine = document.querySelector("#nine");
// const eight = document.querySelector("#eight");
// let x = addEventListener('onclick');


function clearButton() {
    document.addEventListener("#clear", clear());
}
const clear = function() {
    let result = document.querySelector("#result");
    // result.textContent("");
    log(result);
}




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


log(add(3,4));

clearButton();