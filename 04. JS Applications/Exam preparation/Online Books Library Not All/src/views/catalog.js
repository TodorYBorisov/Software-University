import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${data.length == 0 ? html`
    <p class="no-books">No books in database!</p>` : html`
    <ul class="other-books-list">
        ${data.map(template)}
    </ul>`}
</section>`;


const template = (temp) => html`
    <li class="otherBooks">
        <h3>${temp.title}</h3>
        <p>Type: ${temp.type}</p>
        <p class="img"><img src="${temp.imageUrl}"></p>
        <a class="button" href="/catalog/${temp._id}">Details</a>
    </li>`;

export async function catalogPage(ctx) {

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const data = await getAllData();

    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}