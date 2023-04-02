import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem } from '../data/data.js';
import { getUserData } from '../util.js';
import { getItemById } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
//${dataItem.}, href="/edit/${dataItem._id}", @click=${onDelete} href="javascript:void(0)"
const detailsTemplate = (dataItem, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${dataItem.imageUrl}" alt="example1" />
        <p id="details-title">${dataItem.name}</p>
        <div id="info-wrapper">
            <div id="details-description">
                <p>${dataItem.description}</p>
                <p id="nutrition">Nutrition</p>
                <p id="details-nutrition">${dataItem.nutrition}</p>
            </div>
            <!--Edit and Delete are only for creator-->
            ${dataItem.canEdit ? html`
            <div id="action-buttons">
                <a href="/edit/${dataItem._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
            </div>` : null}
        </div>
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