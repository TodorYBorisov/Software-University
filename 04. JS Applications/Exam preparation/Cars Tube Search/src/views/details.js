import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe } from '../data/data.js';
import { getUserData } from '../util.js';
import { getShoeById } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
//@click=${onDelete} href="javascript:void(0)"
const detailsTemplate = (dataShoe, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${dataShoe.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${dataShoe.brand}</li>
            <li><span>Model:</span>${dataShoe.model}</li>
            <li><span>Year:</span>${dataShoe.year}</li>
            <li><span>Price:</span>${dataShoe.price}</li>
        </ul>

        <p class="description-para">${dataShoe.description}</p>

        ${dataShoe.canEdit ? html`<div class="listings-buttons">
            <a href="/edit/${dataShoe._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="button-list">Delete</a>
        </div>` : null}
    </div>
</section>`;


export async function detailsPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataShoe = await getShoeById(id);

    const userData = getUserData(); // дърпаме данните за потребителя и проверяваме
    if (userData && userData._id == dataShoe._ownerId) {
        dataShoe.canEdit = true;
        //dataShoe.isOwner =true;
    }
    //dataShoe.canEdit = true може да бъде и dataShoe.isOwner


    ctx.render(detailsTemplate(dataShoe, onDelete));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteShoe(id);
            ctx.page.redirect('/catalog');
        }
    }
}