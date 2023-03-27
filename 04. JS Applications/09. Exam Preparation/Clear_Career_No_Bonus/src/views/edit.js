import { html } from '../../node_modules/lit-html/lit-html.js';
import { updateOffer } from '../data/data.js';
import { getById } from '../data/data.js';

const createTemplate = (dataOffer, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onEdit}>
            <input type="text" name="title" .value=${dataOffer.title} id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" .value=${dataOffer.imageUrl} id="job-logo"
                placeholder="Company logo url" />
            <input type="text" name="category" .value=${dataOffer.category} id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" .value=${dataOffer.description} placeholder="Description"
                rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" .value=${dataOffer.requirements}
                placeholder="Requirements" rows="4" cols="50"></textarea>
            <input type="text" name="salary" .value=${dataOffer.salary} id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>`;

export async function editPage(ctx) {

    // своиството се казва id, защото в page сме го сложили да е /:id
    const id = ctx.params.id;

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const dataOffer = await getById(id);

    ctx.render(createTemplate(dataOffer, onEdit));

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

        const { title, imageUrl, category, description, requirements, salary } = formData;

        const result = await updateOffer(id, { title, imageUrl, category, description, requirements, salary });

        form.reset();
        ctx.page.redirect('/catalog/'+id);
    }
}