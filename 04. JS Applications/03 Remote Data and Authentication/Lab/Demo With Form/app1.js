start();

function start() {

    const email = localStorage.getItem('email');

    if (email !== null) {

        document.getElementById('Welcome').textContent = `Welcome back, ${email}!`;
    }

    document.getElementById('editor_create').addEventListener('submit', postData);
    document.getElementById('save_btn').addEventListener('click', savePart);
    document.getElementById('load_btn').addEventListener('click', loadData);

    //това е делегиран лисънър , затова трябва да ползваме ивента, за да разберен къде е цъкнал потребителя
    document.getElementById('table_body').addEventListener('click', tableAction);
    document.getElementById('cancel_btn').addEventListener('click', toggleEditors);


}

//Task 2
// тук,ще заредим данните от сървъра които създадохме и ще ги сложим в DOM
async function loadData() {
    const url = 'http://localhost:3030/jsonstore/autoparts';
    const response = await fetch(url);
    const data = await response.json();

    const rows = Object.values(data).map(createRow);
    //Може да завъртим тук forOf, но го правим с функцията по долу

    //тук заместваме в таблицата с новите редове който ще дойдат от функцията createRow
    document.getElementById('table_body').replaceChildren(...rows);
    //replaceChildren приема списък от нодове и трябва да се спредне с трите точки за да стане на масив
}
function createRow(record) {

    const trEl = document.createElement('tr');

    trEl.innerHTML =
        `<td>${record._id}</td>
        <td>${record.label}</td>
        <td>$ ${record.price}</td>
        <td>${record.qty}</td>
        <td>
            <button data-id="${record._id}" class="delete_btn">Delete</button>
            <button data-id="${record._id}" class="edit_btn">Edit</button>
        </td>`;

    return trEl;
}
//Тask 1
//тук правим НОВ запис в базата данни с POST request!
async function postData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    //const formData = Object.fromEntries(new FormData(event.target));

    const partData = {
        label: formData.get('lable'),
        price: Number(formData.get('price')),
        qty: Number(formData.get('quantity')),
    };

    if (partData.price == '' || partData.qty == '') {
        return alert('Price and quantity must be numbers!');
    }

    // const data = formData.entries();
    // const arr = [...data]; // връща ни масив от kvp-ta
    // console.log(Object.fromEntries(arr)); ще ни върне обект

    const url = 'http://localhost:3030/jsonstore/autoparts';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify(partData)
    };
    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            throw new Error('Error');
        }
        const data = await response.json();
 
    } catch (error) {
        alert(error.message);
        throw error;
    }

    loadData();
    event.target.reset(); // зачистваме полетата на формуляра
}

//Task 3 event delegation/ намираме на кой ред е цъкнал потребителя
function tableAction(event) {

    const target = event.target;

    if (target.tagName == 'BUTTON') {

        const row = target.parentNode.parentNode.firstChild.textContent;
        if (target.classList.contains('delete_btn')) {

            //deleteRecord(target.dataset.id);
            deleteRecord(row);
            //id е името на свойството което го четем от data-id="${record._id}" на бутона 
        } else if (target.classList.contains('edit_btn')) {
            loadForEditing(row);
        }
    }
}

//4 Task delete data row
async function deleteRecord(recordId) {

    //слагаме едно питане дали иска да се изтрие?
    const choice = confirm('Are you sure?');

    if (choice == false) {
        return;
    }

    const url = 'http://localhost:3030/jsonstore/autoparts/' + recordId;

    const options = {
        method: 'delete',
    };

    const response = await fetch(url, options);

    loadData();
}

//5 Edit part тя ще е на две части, първо зареждане полсе изпращане на редакция

async function loadForEditing(recordId) {

    const url = 'http://localhost:3030/jsonstore/autoparts/' + recordId;
    const response = await fetch(url);

    const data = await response.json();

    document.getElementById('editor_create').style.display = 'none';
    document.getElementById('editor_edit').style.display = 'block';

    document.getElementById('edit_part_id').value = data._id;//сложихме инпут хидън поле, за да вземем валюто
    document.getElementById('edit_part_lable').value = data.label;
    document.getElementById('edit_part_price').value = data.price;
    document.getElementById('edit_part_quantity').value = data.qty;
}

//Task 6 запазване на едитнатия елемент в базата

async function savePart() {

    const record = {};

    record._id = document.getElementById('edit_part_id').value;
    record.label = document.getElementById('edit_part_lable').value;
    record.price = Number(document.getElementById('edit_part_price').value);
    record.qty = Number(document.getElementById('edit_part_quantity').value);

    const url = 'http://localhost:3030/jsonstore/autoparts/' + record._id;

    const options = {
        method: 'put',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify(record)
    };

    const response = await fetch(url, options);
    const data = await response.json();

    toggleEditors();

    loadData();//с тази функция обновявамв таблицата
}

function toggleEditors(params) {
    document.getElementById('editor_create').style.display = 'block';
    document.getElementById('editor_edit').style.display = 'none';
}