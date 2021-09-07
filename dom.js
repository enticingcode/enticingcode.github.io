//console.log("Hello World!")

const grid = document.getElementById("grid");

function makeGrid() {
    for (let i = 0; i < 255; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = "1";
        grid.appendChild(cell).className = 'cell';

    }
}

const cell = document.getElementsByClassName('cell');


// CHANGES COLOR OF CELLS TO GREY //
function changeColor() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", addAttr)

    }
    return;
}

// ADDS CELLS ATTRIBUTE COLOR // 
function addAttr() {
    this.classList.add('cellHov')
}

// REMOVES/RESETS CELLS COLOR // 
function rmvAttr() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].classList.remove("cellHov");
        cell[i].style.backgroundColor = "";
        cell[i].removeEventListener('mouseover', randomizeColors)
        
    }
}

let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'white', 'teal', 'brown', 'tan', 'rosybrown', 'plum']
const rainbowBtn = document.querySelector("#rainbowBtn");

console.log(rainbowBtn);

function rainbowMode() {
    rainbowBtn.addEventListener("click", () => {
        rmvAttr();
        rainbowVomit();
    })
}

function rainbowVomit() {
    for (i = 0; i < cell.length; i++) {
        cell[i].addEventListener('mouseover', randomizeColors, false)
    }
}
function randomizeColors() {
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
}

const resetBtn = document.querySelector('#reset');

function reset() {
    resetBtn.addEventListener("click", rmvAttr)
    
}
//var gridSize = window.prompt("how many squares do you want?")


//console.log(reset);


makeGrid();
rainbowMode();
changeColor();
reset();
