function addItem() {

    let input = document.getElementById('newItemText');
    let listElement = document.getElementById('items');

    let addLiElement = document.createElement('li');
    addLiElement.textContent = input.value;
    listElement.appendChild(addLiElement);

    let deleteButton = document.createElement('a');
    deleteButton.href ='#';
    deleteButton.textContent = '[Delete]';
    addLiElement.appendChild(deleteButton);
    
    // deleteButton.onclick = () => {
    //     addNewElement.parentElement.removeChild(addNewElement);
    // };

    deleteButton.addEventListener('click', function () {
        addLiElement.parentElement.removeChild(addLiElement);
    });
}