import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';


const catalogTemplate = (data) => html`
<section id="dashboard">

    ${data.length == 0 ? html`<h2>There are no albums added yet.</h2>` : html`
    <h2>Albums</h2>
    <ul class="card-wrapper">
        ${data.map(template)}
    </ul>`}
    
</section>`;

const template = (card) => html`
<li class="card">
    <img src="${card.imageUrl}" alt="${card.imageUrl}" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${card.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${card.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${card.sales}</span></p>
    <a class="details-btn" href="/details/${card._id}">Details</a>
</li>`;

export async function catalogPage(ctx) {

    const data = await getAllData();

    ctx.render(catalogTemplate(data));
}