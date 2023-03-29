import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe } from '../data/data.js';
import { getUserData } from '../util.js';
import { getAlbumById } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const detailsTemplate = (dataAlbum, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${dataAlbum.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${dataAlbum.name}</h1>
                <h3>Artist: ${dataAlbum.artist}</h3>
                <h4>Genre: ${dataAlbum.genre}</h4>
                <h4>Price: $${dataAlbum.price}</h4>
                <h4>Date: ${dataAlbum.releaseDate}</h4>
                <p>${dataAlbum.description}</p>
            </div>

            <!-- Only for registered user and creator of the album-->
            ${dataAlbum.canEdit ? html`
            <div class="actionBtn">
                <a href="/edit/${dataAlbum._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>` :  null}
        </div>
    </div>
</section>`;


export async function detailsPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataAlbum = await getAlbumById(id);

    const userData = getUserData(); // дърпаме данните за потребителя и проверяваме
    if (userData && userData._id == dataAlbum._ownerId) {
        dataAlbum.canEdit = true;
    }

    ctx.render(detailsTemplate(dataAlbum, onDelete));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteShoe(id);
            ctx.page.redirect('/catalog');
        }
    }
}