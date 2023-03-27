import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getAllData, getById } from '../data/data.js';
import { getUserData } from '../util.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const detailsTemplate = (dataOffer,onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${dataOffer.imageUrl}" alt="example1" />
        <p id="details-title">${dataOffer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${dataOffer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${dataOffer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${dataOffer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${dataOffer.requirements}</span>
            </div>
        </div>
        <!-- <p>Applications: <strong id="applications">1</strong></p> -->

        <!--Edit and Delete are only for creator-->
        ${dataOffer.canEdit ? html`
        <div id="action-buttons">
            <a href="/catalog/${dataOffer._id}/edit" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>

            <!--Bonus - Only for logged-in users ( not authors )-->
            <!-- <a href="" id="apply-btn">Apply</a> -->
        </div>` : null}
    </div>
</section>`;

// const template = (temp) => html`
// `;

export async function detailsPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataOffer = await getById(id);

    const userData = getUserData(); // дърпаме данните за потребителя и проверяваме
    if (userData && userData._id == dataOffer._ownerId) {
        dataOffer.canEdit = true;
    }

    ctx.render(detailsTemplate(dataOffer, onDelete));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if(choice){
            await deleteOffer(id);
            ctx.page.redirect('/catalog');
        }
    }
}