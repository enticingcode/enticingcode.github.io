//console.log("Hello World!")

const grid = document.getElementById("grid");

function makeGrid() {
    for (let i = 0; i < 1000; i++) {
        const cell = document.createElement('div');
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
    assignGrid();
}

let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'white', 'teal', 'brown', 'tan', 'rosybrown', 'plum']
const rainbowBtn = document.querySelector("#rainbowBtn");

//console.log(rainbowBtn);

function rainbowMode() {
    rainbowBtn.addEventListener("click", () => {
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


function assignGrid() {
    gridSize = window.prompt("How many squares per side do you want? Max: 100")
 }

function reset() {
    resetBtn.addEventListener("click", rmvAttr)
    
}






makeGrid();
rainbowMode();
changeColor();
reset();
