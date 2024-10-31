const inputField = document.querySelector('input');
const addButton = document.querySelector('.add_button'); 
const clearButton = document.querySelector('.clear_button'); 
const listContainer = document.querySelector('ul');


function addListItem() {
    const inputValue = inputField.value.trim(); 

    if (inputValue !== "") { 
        const listItem = document.createElement('li'); 
        listItem.textContent = inputValue; 
        listContainer.appendChild(listItem);
        inputField.value = ""; 
    }
}

function clearList() {
    listContainer.innerHTML = ""; 
}


addButton.addEventListener('click', addListItem);
clearButton.addEventListener('click', clearList);