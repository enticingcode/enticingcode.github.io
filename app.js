let toDoList = [];


let addButton = document.querySelector('#addItem');
let deleteButton = document.querySelector('#deleteItem');
let list = document.querySelector('#myList');

addItem.addEventListener('click', promptAdd)
deleteItem.addEventListener('click', promptDelete)


let count = 0;
function createItem(userInput) {
    toDoList.push(userInput);
    let newItem = document.createElement('li');
    newItem.setAttribute('id', count++);
    newItem.textContent = userInput;
    list.appendChild(newItem);

    // let newItem = document.createElement('li')
    // newItem.textContent = userInput;
    // list.appendChild(newItem);

}

function deleteListItem(deleteInput, toDoList) {
    console.log(deleteInput);
    toDoList.splice(deleteInput, 1);
    let selection = document.getElementById(`${deleteInput}`);
    console.log(selection);
    // if this isnt here soemthing was lost
    selection.remove();
    count--;
}

function promptAdd() {
    let userInput = prompt("Add to List");
    if (userInput === null || userInput === '') {

    } else {
        createItem(userInput);
    }
}
function promptDelete() {
    let deleteInput = prompt("Choose what item number to delete") - 1;
    deleteListItem(deleteInput, toDoList);
}

function mapArray(userInput) {
    toDoList.map(userInput - 1);
    console.log(toDoList);
}

// let listItems = list.childNodes;
// console.log(listItems);

var b = document.querySelector("button");

// b.setAttribute("id", "sup bro");
// // b.setAttribute("disabled", "");





