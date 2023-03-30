import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe } from '../data/data.js';
import { getUserData } from '../util.js';
import { getShoeById } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const detailsTemplate = (dataShoe, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="${dataShoe.imageUrl}" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${dataShoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${dataShoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${dataShoe.release}</span></p>
            <p>Designer: <span id="details-designer">${dataShoe.designer}</span></p>
            <p>Value: <span id="details-value">${dataShoe.value}</span></p>
        </div>

        <!--Edit and Delete are only for creator-->
        ${dataShoe.canEdit ? html`
        <div id="action-buttons">
            <a href="/edit/${dataShoe._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>` : null};
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
    }

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