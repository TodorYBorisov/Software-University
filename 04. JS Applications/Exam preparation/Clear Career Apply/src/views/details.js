import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOffer, getAllData, getById } from '../data/data.js';
import { getUserData } from '../util.js';
import { apply, getApplications, getUserApplication } from '../data/applications.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const detailsTemplate = (dataOffer, onDelete, onApply) => html`
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
        <p>Applications: <strong id="applications">${dataOffer.applications}</strong></p>

        <!--Edit and Delete are only for creator-->
        ${dataOffer.canEdit || dataOffer.canApply ? html`

        <div id="action-buttons">

            ${dataOffer.canEdit ? html`
            <a href="/edit/${dataOffer._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` : null}

            ${dataOffer.canApply ? html`
            <a @click=${onApply} href="javascript:void(0)" id="apply-btn">Apply</a>` : null}
        </div>` : null}
    </div>
</section>`;

// const template = (temp) => html`
// `;

export async function detailsPage(ctx) {
    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    const request = [
        getById(id),
        getApplications(id)
    ];

    const userData = getUserData(); // дърпаме данните за потребителя и проверяваме

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    //const dataOffer = await getById(id);

    if (userData) {
        request.push(getUserApplication(id, userData._id));
    }

    const [dataOffer, applications, hasApplied] = await Promise.all(request);
    dataOffer.applications = applications;

    if (userData) {
        // правим две променливи през dataForm
        dataOffer.canEdit = userData._id == dataOffer._ownerId;
        dataOffer.canApply = dataOffer.canEdit == false && hasApplied == 0;
    }


    ctx.render(detailsTemplate(dataOffer, onDelete, onApply));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteOffer(id);
            ctx.page.redirect('/catalog');
        }
    }

    async function onApply() {
        await apply(id);
        ctx.page.redirect('/catalog/'+ id);
    }
}