import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../data/data.js';

//@submit=${onCreate}
const createTemplate = (onCreate) => html`
<section id="create">
    <div class="form">
        <h2>Add Fruit</h2>
        <form @submit=${onCreate} class="create-form">
            <input type="text" name="name" id="name" placeholder="Fruit Name" />
            <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
            <textarea id="fruit-description" name="description" placeholder="Description" rows="10"
                cols="50"></textarea>
            <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
            <button type="submit">Add Fruit</button>
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

        const { name, imageUrl, description, nutrition } = formData;
        //(1) тук const го слагаме да е let защото имаме стойности който приемат променливи
        // year = Number(year);
        // price = Number(price);


        await createItem({name, imageUrl, description, nutrition});

        form.reset();
        ctx.page.redirect('/catalog');
    }
}





