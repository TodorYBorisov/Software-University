import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data) => html`
<section id="dashboard">
    <h2>Job Offers</h2>

    ${data.length == 0 ? html`
    <h2>No offers yet.</h2>` : 
    data.map(template)}

</section>`;

const template = (temp) => html`
<div class="offer">
    <img src="${temp.imageUrl}" alt="example2" />
    <p>
        <strong>Title: </strong><span class="title">${temp.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${temp.salary}</span></p>
    <a class="details-btn" href="/catalog/${temp._id}">Details</a>
</div>`;

export async function catalogPage(ctx) {

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const data = await getAllData();

    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}