console.log("Hello World!")

const grid = document.getElementById("grid");
//const cell = document.createElement('div');

/* cell.innerHTML = "test";
grid.appendChild(cell); */

function makeGrid() {
    for (let i = 0; i < 255; i++) {
        const cell = document.createElement('div');
        cell.innerHTML = "3";
        grid.appendChild(cell).className = 'cell';
        
    }
}

makeGrid();