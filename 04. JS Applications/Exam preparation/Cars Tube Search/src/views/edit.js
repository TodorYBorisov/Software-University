import { html } from '../../node_modules/lit-html/lit-html.js';
import { getShoeById } from '../data/data.js';
import { editShoe } from '../data/data.js';

//@submit=${onEdit} .value=${dataShoe.brand}
const createTemplate = (dataShoe, onEdit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onEdit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value=${dataShoe.brand}>

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value=${dataShoe.model}>

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value=${dataShoe.description}>

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value=${dataShoe.year}>

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${dataShoe.imageUrl}>

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value=${dataShoe.price}>

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
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

            if (input === 'year' && Number(formData[input]) < 0) {
                alert('The year must be a positive number!');
                return;
            }
            if (input === 'price' && Number(formData[input]) < 0) {
                alert('The price must be a positive number!');
                return;
            }

            formData[input] = formData[input].trim();
        }

        let { brand, model, description, year, imageUrl, price } = formData;
        year = Number(year);
        price = Number(price);

        await editShoe(id, { brand, model, description, year, imageUrl, price });

        form.reset();
        ctx.page.redirect(`/details/${id}`);
    }
}