import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">

        ${data.length == 0 ? html`<div>
            <p class="no-pets">No pets in dashboard</p>
        </div>` :
       html`${data.map(template)}`}
    </div>
</section>`;


const template = (temp) => html`
    <div class="animals-board">
        <article class="service-img">
            <img class="animal-image-cover" src="${temp.image}">
        </article>
        <h2 class="name">${temp.name}</h2>
        <h3 class="breed">${temp.breed}</h3>
        <div class="action">
            <a class="btn" href="/details/${temp._id}">Details</a>
        </div>
    </div>`;

export async function catalogPage(ctx) {

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const data = await getAllData();

    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}