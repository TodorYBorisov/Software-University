import { html } from '../../node_modules/lit-html/lit-html.js';
import { createShoe } from '../data/data.js';

//@submit=${onCreate}
const createTemplate = (onCreate) => html`
<section id="create-meme">
    <form @submit=${onCreate} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onCreate));

    async function onCreate(event) {
        event.preventDefault();

        const notification = document.getElementById('errorBox');
        const alertText = notification.querySelector('span');

        function alertFnMessage(message) {
            notification.style.display = 'inline-block';
            alertText.textContent = message;

            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
        const form = event.currentTarget;
        const formData = Object.fromEntries(new FormData(form));
        for (const input in formData) {
            if (formData[input] === '') {
                return alertFnMessage('All fields are required!');
            }

            formData[input] = formData[input].trim();
        }

        const { title, description, imageUrl } = formData;
      
        await createShoe({ title, description, imageUrl });

        form.reset();
        ctx.page.redirect('/catalog');
    }
}



