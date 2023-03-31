import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById } from '../data/data.js';
import { editItem } from '../data/data.js';

//@submit=${onEdit} .value=${dataItem.}
const createTemplate = (dataItem, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" .value=${dataItem.singer} id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" .value=${dataItem.album} id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" .value=${dataItem.imageUrl} id="album-img" placeholder="Image url" />
            <input type="text" name="release" .value=${dataItem.release} id="album-release" placeholder="Release date" />
            <input type="text" name="label" .value=${dataItem.label} id="album-label" placeholder="Label" />
            <input type="text" name="sales" .value=${dataItem.sales} id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataItem = await getItemById(id);

    ctx.render(createTemplate(dataItem, onEdit));

    async function onEdit(event) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        for (let input in formData) {
            if (formData[input] === '') {

                return alert('All fields are required!');
    
            }

            //(1) друг начин за проверка ако има такава , ползваш 1 или 2
            // if (input === 'year' && Number(formData[input]) < 0) {
            //     alert('The year must be a positive number!');
            //     return;
            // }
            // if (input === 'price' && Number(formData[input]) < 0) {
            //     alert('The price must be a positive number!');
            //     return;
            // }

            formData[input] = formData[input].trim();
        }

        const { singer, album, imageUrl, release, label, sales } = formData;

        //(1) тук const го слагаме да е let защото имаме стойности който приемат променливи
        // year = Number(year);
        // price = Number(price);

        await editItem(id, { singer, album, imageUrl, release, label, sales });

        form.reset();
        ctx.page.redirect('/');
    }
}
//ctx.page.redirect(`/details/${id}`);