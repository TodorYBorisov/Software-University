import { html } from '../../node_modules/lit-html/lit-html.js';
import { getShoeById } from '../data/data.js';
import { editShoe } from '../data/data.js';


const createTemplate = (dataShoe, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit item</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="brand" .value=${dataShoe.brand} id="shoe-brand" placeholder="Brand" />
            <input type="text" name="model" .value=${dataShoe.model} id="shoe-model" placeholder="Model" />
            <input type="text" name="imageUrl" .value=${dataShoe.imageUrl} id="shoe-img" placeholder="Image url" />
            <input type="text" name="release" .value=${dataShoe.release} id="shoe-release" placeholder="Release date" />
            <input type="text" name="designer" .value=${dataShoe.designer} id="shoe-designer" placeholder="Designer" />
            <input type="text" name="value" .value=${dataShoe.value} id="shoe-value" placeholder="Value" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataShoe = await getShoeById(id);

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

        const { brand, model, imageUrl, release, designer, value } = formData;

        const result = await editShoe(id, { brand, model, imageUrl, release, designer, value });

        form.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}