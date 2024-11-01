const inputField = document.querySelector('input');
const addButton = document.querySelector('.add_button');
const clearButton = document.querySelector('.clear_button');
const listContainer = document.querySelector('ul');

function addListItem() {
    const inputValue = inputField.value.trim();
    if (inputValue !== "") {
        const listItem = document.createElement('li');
        listItem.textContent = inputValue;
        listItem.className = 'list-item'; 

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'X';
        deleteButton.className = 'delete-button';

        deleteButton.addEventListener('click', () => {
            listContainer.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        listContainer.appendChild(listItem);
        inputField.value = "";
    }
}

function clearList() {
    listContainer.innerHTML = "";
}

addButton.addEventListener('click', addListItem);
clearButton.addEventListener('click', clearList);
