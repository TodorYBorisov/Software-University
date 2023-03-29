import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAlbumById } from '../data/data.js';
import { editAlbum } from '../data/data.js';

//темплейт .value=${dataAlbum.} @submit=${onEdit}
const createTemplate = (dataAlbum, onEdit) => html`
<section class="editPage">
    <form @submit=${onEdit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" .value=${dataAlbum.name}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${dataAlbum.imgUrl}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" .value=${dataAlbum.price}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text"
                    .value=${dataAlbum.releaseDate}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" .value=${dataAlbum.artist}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" .value=${dataAlbum.genre}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10"
                    cols="10">.value=${dataAlbum.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataShoe = await getAlbumById(id);

    ctx.render(createTemplate(dataShoe, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        for (const input in formData) {
            if (formData[input] === '') {
                return alert('All fields are required!');
            }

            formData[input] = formData[input].trim();
        }

        const { name, imgUrl, price, releaseDate, artist, genre, description } = formData;

        const result = await editAlbum(id, { name, imgUrl, price, releaseDate, artist, genre, description });

        form.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}