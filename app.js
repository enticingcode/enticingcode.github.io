let inputBar = document.querySelector('#toDoEntry');
let addButton = document.querySelector('#addItem');
let incompleteList = document.querySelector('#incomplete')
let newEntry = document.createElement('div');
let addedItem;

addButton.addEventListener('click', function (event) {
    addedItem = inputBar.value;
    incompleteList.appendChild(newEntry);
    newEntry.textContent = addedItem;


    console.log(addedItem)
})







// function getInput() {
//     console.log(inputBar.value);
// }

// getInput();