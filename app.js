let inputBar = document.querySelector('#toDoEntry');
let addButton = document.querySelector('#addItem');
let incompleteList = document.querySelector('#incomplete')
let newEntry = document.createElement('div');
let count = 0;


addButton.addEventListener('click', addNew)
        


function addNew() {
    let addedItem = inputBar.value;
        newEntry.setAttribute('id', count++);
        newEntry.textContent = addedItem;
        incompleteList.appendChild(newEntry);
        console.log(addedItem);
}

