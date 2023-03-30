import { html } from '../../node_modules/lit-html/lit-html.js';
import { createCar } from '../data/data.js';

//@submit=${onCreate}
const createTemplate = (onCreate) => html`
<section id="create-listing">
    <div class="container">
        <form @submit=${onCreate} id="create-form">
            <h1>Create Car Listing</h1>
            <p>Please fill in this form to create an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price">

            <hr>
            <input type="submit" class="registerbtn" value="Create Listing">
        </form>
    </div>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
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

        await createCar({ brand, model, description, year, imageUrl, price });

        form.reset();
        ctx.page.redirect('/catalog');
    }
}

