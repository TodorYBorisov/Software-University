import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';

const catalogTemplate = (data) => html`
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">

        ${data.length == 0 ? html`<p class="no-memes">No memes in database.</p>` :
         data.map(template)}

    </div>
</section>`;

const template = (temp) => html`
    <div class="meme">
        <div class="card">
            <div class="info">
                <p class="meme-title">${temp.title}</p>
                <img class="meme-image" alt="meme-img" src="${temp.imageUrl}">
            </div>
            <div id="data-buttons">
                <a class="button" href="/details/${temp._id}">Details</a>
            </div>
        </div>
    </div>`;

export async function catalogPage(ctx) {

    const data = await getAllData();

    ctx.render(catalogTemplate(data));

}