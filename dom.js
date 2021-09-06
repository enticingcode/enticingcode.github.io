//console.log("Hello World!")

const grid = document.getElementById("grid");




/* cell.innerHTML = "test";
grid.appendChild(cell); */




function makeGrid() {
    for (let i = 0; i < 255; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = "3";
        grid.appendChild(cell).className = 'cell';

    }
}



const cell = document.getElementsByClassName('cell');
console.log(cell);

// const getCell = document.querySelectorAll(".cell");
// console.log(getCell);

// cell.addEventListener("mouseover", changeColor);



// CHANGES COLOR OF CELLS TO GREY //
function changeColor() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", addAttr)
    }
}

function addAttr() {
    this.classList.add('cellHov')
}


// REMOVES/RESETS CELLS COLOR // 





//adjustGrid(gridSize);

let colors = ['blue', 'red', 'green', 'yellow', 'purple', 'pink', 'black', 'white', 'teal', 'brown', 'tan', 'rosybrown', 'plum']
const rainbow = document.querySelector("#rainbow");



function rainbowMode() {
    rainbow.addEventListener("click", function rmvAttr() {

        for (let i = 0; i < cell.length; i++) {
            cell[i].classList.remove("cellHov")
        }
        for (i = 0; i < cell.length; i++)
        cell[i].addEventListener('mouseover', function () {
            for (i = 0; i < cell.length; i++)
                cell[i].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];})

    
    })
}



const reset = document.querySelector('#reset');

function resetGrid() {
    reset.addEventListener("click", function rmvAttr() {
        for (let i = 0; i < cell.length; i++) {
            cell[i].classList.remove("cellHov")
        };
        var gridSize = window.prompt("how many squares do you want?")

    })
}

//console.log(reset);

resetGrid('reset');
makeGrid();
changeColor();
rainbowMode();


const result = null;

console.log(typeof result);