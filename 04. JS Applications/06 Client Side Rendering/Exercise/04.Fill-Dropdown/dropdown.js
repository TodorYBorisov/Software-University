import { html, render } from '../../node_modules/lit-html/lit-html.js';

const url = 'http://localhost:3030/jsonstore/advanced/dropdown';
const options = {
    method: 'get',
    headers: { 'Content-type': 'applications/json' },
};
addItem();
async function addItem() {
    const selectMenu = document.getElementById('menu');

    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }

        const data = await response.json();
        const items = Object.values(data);

        const template = html`${items.map((item) => html`<option .value="${item._id}">${item.text}</option>`)}`;
        render(template, selectMenu);

    } catch (error) {
        alert(error.message);
    }

    document.querySelector('form').addEventListener('submit', addCity);
    async function addCity(event) {
        event.preventDefault();

        const text = document.getElementById('itemText').value;
        const options2 = {
            method: 'post',
            headers: { 'Content-type': 'applications/json' },
            body: JSON.stringify({ text })
        };

        const response = await fetch(url, options2);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        } else {
            const data = await response.json();
            const newData = Object.values(data);
            addItem(newData);

            console.log(newData);
        }
    }
}
