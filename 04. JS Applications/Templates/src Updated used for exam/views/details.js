import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem } from '../data/data.js';
import { getUserData } from '../util.js';
import { getItemById } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
//${dataItem.}, href="/edit/${dataItem._id}", @click=${onDelete} href="javascript:void(0)"
const detailsTemplate = (dataItem, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src="${dataItem.imageUrl}" alt="${dataItem.imageUrl}" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${dataItem.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${dataItem.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${dataItem.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${dataItem.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${dataItem.sales}</span></p>
        </div>

        <div id="likes">Likes: <span id="likes-count">0</span></div>

        <!--Edit and Delete are only for creator-->
        ${dataItem.canEdit ? html`<div id="action-buttons">
            <a href="/edit/${dataItem._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>` : html`
        <div id="action-buttons">
            <a href="" id="like-btn">Like</a>
        </div>`}
    </div>
</section>`;


export async function detailsPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataItem = await getItemById(id);

    const userData = getUserData(); // дърпаме данните за потребителя и проверяваме
    if (userData && userData._id == dataItem._ownerId) {
        dataItem.canEdit = true;
        //dataItem.isOwner =true;
    }
    //dataItem.canEdit = true може да бъде и dataItem.isOwner


    ctx.render(detailsTemplate(dataItem, onDelete));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteItem(id);
            ctx.page.redirect('/catalog');
        }
    }
}