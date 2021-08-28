console.log("Hello World!")

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

function cellHov() {
    for(var i = 0; i < cell.length; i ++) {
        cell[i].style.className='cellHov';
    }
   // document.addEventListener('mouseover', 
}
makeGrid();