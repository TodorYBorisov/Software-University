import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe } from '../data/data.js';
import { getUserData } from '../util.js';
import { getShoeById } from '../data/data.js';
import { makeDonation, getDonates, getUserDonate } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const detailsTemplate = (element, onDelete, donates, donate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src="${element.image}">
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${element.name}</h1>
                <h3>Breed: ${element.breed}</h3>
                <h4>Age: ${element.age}</h4>
                <h4>Weight: ${element.weight}</h4>
                <h4 class="donation">Donation: ${donates}$</h4>
            </div>

            ${element.user ? html`
            <div class="actionBtn">
                ${element.isOwner ? html`
                <a href="/edit/${element._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
                ` : html`
                ${element.userDonation == 0 ? html`
                <a href="javascript:void(0)" class="donate" @click=${donate}>Donate</a>` : null}`}
            </div>` : null}
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;
    const donates = await getDonates(id) * 100;
    const element = await getShoeById(id);
    element.user = false;
    const userData = getUserData(); // дърпаме данните за потребителя и проверяваме

    if (userData) {
        element.user = true;
        element.isOwner = userData._id == element._ownerId;
        element.userDonation = await getUserDonate(id, userData._id);
    }

    ctx.render(detailsTemplate(element, onDelete, donates, donate));


    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteShoe(id);
            ctx.page.redirect('/');
        }
    }

    async function donate(e) {
        e.preventDefault();
        makeDonation(element._id);
        ctx.page.redirect(`/details/${id}`);
    }
}