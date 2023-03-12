start();

function start() {
    document.getElementById('create_btn').addEventListener('click', postData);
    document.getElementById('load_btn').addEventListener('click', loadData);
}

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

    console.log(data);
}

function createRow(record) {

    const trEl = document.createElement('tr');

    trEl.innerHTML =
        `<td>${record._id}</td>
        <td>${record.label}</td>
        <td>$ ${record.price}</td>
        <td>${record.qty}</td>
        <td></td>`;

    return trEl;
}