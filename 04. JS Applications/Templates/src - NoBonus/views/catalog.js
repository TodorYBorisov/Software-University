import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data) => html`
<section id="dashboard">
    <h2>Collectibles</h2>

    ${data.length == 0 ? html`<h2>There are no items added yet.</h2>` : html`
    <ul class="card-wrapper">
        ${data.map(template)}
    </ul>`}
</section>`;


const template = (temp) => html`
    <li class="card">
        <img src="${temp.imageUrl}" alt="eminem" />
        <p>
            <strong>Brand: </strong><span class="brand">${temp.brand}</span>
        </p>
        <p>
            <strong>Model: </strong><span class="model">${temp.model}</span>
        </p>
        <p><strong>Value:</strong><span class="value">${temp.value}</span>$</p>
        <a class="details-btn" href="/details/${temp._id}">Details</a>
    </li>`;

export async function catalogPage(ctx) {

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const data = await getAllData();

    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}