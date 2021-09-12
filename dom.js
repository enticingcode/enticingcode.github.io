const testID = document.querySelector('testID');
const grid = document.getElementById("grid");
const cell = document.getElementsByClassName('cell');
let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'white', 'teal', 'brown', 'tan', 'rosybrown', 'plum']
const rainbowBtn = document.querySelector("#rainbowBtn");

function makeGrid(totalCells) {
    for (let i = 0; i < totalCells * totalCells; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell).className = 'cell';
        // container.style.gridTemplateColumns= `repeat(${sizeMeUp}, 1fr)`
        // container.style.gridTemplateRows= `repeat(${sizeMeUp}, 1fr)`

    }
    changeColor();
}



// CHANGES COLOR OF CELLS TO GREY //
function changeColor() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", addAttr)

    }

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

const container = document.querySelector(".container")

function assignGrid() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.lastChild);

        //const cell = document.createElement('div');
        //container.style.gridTemplateColumns= `repeat(${sizeMeUp}, 1fr)`
        //container.style.gridTemplateRows= `repeat(${sizeMeUp}, 1fr)`
    }
    gridSize = window.prompt("How many squares per side do you want? Max: 100");
    if (gridSize <= 100){
    let sizeMeUp = parseInt(gridSize);
    container.style.gridTemplateColumns = `repeat(${sizeMeUp},  1fr)`
    container.style.gridTemplateRows = `repeat(${sizeMeUp}, 1fr)`
    console.log(sizeMeUp);

    makeGrid(sizeMeUp);
    }
    else if (gridSize > 100) {
        alert("error, please under 100, don't brick your system dumbass")
    }
}

function reset() {
    resetBtn.addEventListener("click", rmvAttr)

}

//console.log(gridSize);




makeGrid(16);
rainbowMode();
changeColor();
reset();
