function addItem() {

    let inputField1 = document.getElementById('newItemText');
    let inputField2 = document.getElementById('newItemValue');

    let optionMenu = document.createElement('option');
    optionMenu.textContent = inputField1.value;
    optionMenu.value = inputField2.value;

    let selectElement = document.getElementById('menu');
    selectElement.appendChild(optionMenu);

    inputField1.value = '';
    inputField2.value = '';
}