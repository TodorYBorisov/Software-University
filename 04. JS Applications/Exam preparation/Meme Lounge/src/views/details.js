import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe } from '../data/data.js';
import { getUserData } from '../util.js';
import { getShoeById } from '../data/data.js';

const detailsTemplate = (dataShoe, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${dataShoe.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src="${dataShoe.imageUrl}">
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${dataShoe.description}</p>

            ${dataShoe.canEdit ? html`<a class="button warning" href="/edit/${dataShoe._id}">Edit</a>
            <button @click=${onDelete} class="button danger">Delete</button>` : null}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {

    const id = ctx.params.id;

    const dataShoe = await getShoeById(id);

    const userData = getUserData(); 
    if (userData && userData._id == dataShoe._ownerId) {
        dataShoe.canEdit = true;
 
    }
  
    ctx.render(detailsTemplate(dataShoe, onDelete));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteShoe(id);
            ctx.page.redirect('/catalog');
        }
    }
}