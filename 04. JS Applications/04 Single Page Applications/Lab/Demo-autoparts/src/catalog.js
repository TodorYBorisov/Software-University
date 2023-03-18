const catalogSection = document.getElementById('catalog');
const table = catalogSection.querySelector('#table');

const loadingEl = document.createElement('p');
loadingEl.innerHTML = 'Loading &hellip';

const catalogUrl = 'http://localhost:3030/data/autoparts';

export async function showCatalog() {
    document.querySelector('main').replaceChildren(catalogSection);

    table.replaceChildren(loadingEl);
    try {
        //сетваме токена от локал сториджа
        const token = localStorage.getItem('accessToken');
        //сетваме оппъните за правене на ауторизирана заявка
        const options = {
            method: 'get',
            headers: {},

        };
        //ако имаме токен
        if (token != null) {
            options.headers['X-Authorization'] = token;
        }

        const response = await fetch(catalogUrl,options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        table.replaceChildren(...data.map(createRow));

    } catch (error) {
        alert(error.message);
    }

}

function createRow(record) {
    const element = document.createElement('tr');

    element.innerHTML = `
    <td>${record.label}</td>
    <td>€ ${record.price}</td>
    <td><a href="javascript:void(0)" data-id="${record._id}">Details</a></td>`;

    return element;
}
