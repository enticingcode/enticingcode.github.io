//console.log("Hello World!")

const grid = document.getElementById("grid");


//console.log(cell);

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

function changeColor() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("mouseover", addAttr)
    }
}

function addAttr() {
    this.classList.add('cellHov')
}





function rmvAttr() {
    cell.classList.remove("cellHov")
}


const reset = document.querySelector('#reset');
function resetGrid() {
    reset.addEventListener("click", rmvAttr)
}

console.log(reset);

resetGrid();
makeGrid();
changeColor();
