import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../data/data.js';

//@submit=${onCreate}
const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add Album</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
            <input type="text" name="album" id="album-album" placeholder="Album" />
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
            <input type="text" name="release" id="album-release" placeholder="Release date" />
            <input type="text" name="label" id="album-label" placeholder="Label" />
            <input type="text" name="sales" id="album-sales" placeholder="Sales" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
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

            // formData[input] = formData[input].trim();
        }

        const { singer, album, imageUrl, release, label, sales } = formData;
        //(1) тук const го слагаме да е let защото имаме стойности който приемат променливи
        // year = Number(year);
        // price = Number(price);


        await createItem({singer, album, imageUrl, release, label, sales});

        form.reset();
        ctx.page.redirect('/catalog');
    }
}