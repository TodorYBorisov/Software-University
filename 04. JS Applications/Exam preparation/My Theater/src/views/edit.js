import { html } from '../../node_modules/lit-html/lit-html.js';
import { getShoeById } from '../data/data.js';
import { editShoe } from '../data/data.js';

//@submit=${onEdit} .value=${dataShoe.brand}
const createTemplate = (dataShoe, onEdit) => html`
<section id="editPage">
    <form @submit=${onEdit} class="theater-form">
        <h1>Edit Theater</h1>
        <div>
            <label for="title">Title:</label>
            <input id="title" name="title" type="text" placeholder="Theater name" .value=${dataShoe.title}>
        </div>
        <div>
            <label for="date">Date:</label>
            <input id="date" name="date" type="text" placeholder="Month Day, Year" .value=${dataShoe.date}>
        </div>
        <div>
            <label for="author">Author:</label>
            <input id="author" name="author" type="text" placeholder="Author" .value=${dataShoe.author}>
        </div>
        <div>
            <label for="description">Theater Description:</label>
            <textarea id="description" .value=${dataShoe.description} name="description"
                placeholder="Description">To Kill a Mockingbird is a 2018 play based on the 1960 novel of the same name by Harper Lee, adapted for the stage by Aaron Sorkin. It opened on Broadway at the Shubert Theatre on December 13, 2018. The play is set to transfer to London's West End at the Gielgud Theatre in March 2022.</textarea>
        </div>
        <div>
            <label for="imageUrl">Image url:</label>
            <input id="imageUrl" name="imageUrl" type="text" placeholder="Image Url"
            .value=${dataShoe.imageUrl}>
        </div>
        <button class="btn" type="submit">Submit</button>
    </form>
</section>`;

export async function editPage(ctx) {

    const id = ctx.params.id;

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

        const { title, date, author, imageUrl, description } = formData;

        await editShoe(id, { title, date, author, imageUrl, description });

        form.reset();
        ctx.page.redirect(`/my-page/${id}`);
    }
}