function addItem() {

    let input = document.querySelectorAll('#newItemText')[0].value;

    let ulElement = document.querySelector('#items');

    let addElemet = document.createElement('li');
    addElemet.textContent = input;

    ulElement.appendChild(addElemet);
}