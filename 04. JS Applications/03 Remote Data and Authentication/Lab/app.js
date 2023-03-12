start();

function start() {
    document.getElementById('create_btn').addEventListener('click', postData);
    document.getElementById('load_btn').addEventListener('click', loadData);

    //това е делегиран лисънър , затова трябва да ползваме ивента, за да разберен къде е цъкнал потребителя
    document.getElementById('table_body').addEventListener('click', tableAction);
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
        </td>`;

    return trEl;
}
//Тask 1
//тук правим НОВ запис в базата данни с POST request!
async function postData() {

    const label = document.getElementById('part_lable').value;
    const price = Number(document.getElementById('part_price').value);
    const qty = Number(document.getElementById('part_quantity').value);

    const partData = {
        label,
        price,
        qty
    };

    const url = 'http://localhost:3030/jsonstore/autoparts';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify(partData)
    };

    const response = await fetch(url, options);
    const data = await response.json();

    loadData();
}


//Task 3 event delegation/ намираме на кой ред е цъкнал потребителя
function tableAction(event) {

    const target = event.target;

    if (target.tagName == 'BUTTON') {
        if (target.classList.contains('delete_btn')) {

            const row = target.parentNode.parentNode.firstChild.textContent;
            //deleteRecord(target.dataset.id);
            deleteRecord(row);
            //id е името на свойството което го четем от data-id="${record._id}" на бутона 
        }
    }
}

//4 Task delete data row
async function deleteRecord(recordId) {

    const url = 'http://localhost:3030/jsonstore/autoparts/' + recordId;

    const options = {
        method: 'delete',
    };

    const response = await fetch(url, options);

    loadData();
}