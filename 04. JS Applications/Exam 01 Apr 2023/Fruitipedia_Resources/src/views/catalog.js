import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';


const catalogTemplate = (data) => html`
${data.length == 0 ? html`<h2>No fruit info yet.</h2>` : html`
<h2>Fruits</h2>
<section id="dashboard">
    ${data.map(template)}
</section>` }
`;

const template = (card) => html`
<div class="fruit">
    <img src="${card.imageUrl}" alt="example1" />
    <h3 class="title">${card.name}</h3>
    <p class="description">${card.description}</p>
    <a class="details-btn" href="/details/${card._id}">More Info</a>
</div>`;

export async function catalogPage(ctx) {

    const data = await getAllData();

    ctx.render(catalogTemplate(data));
}