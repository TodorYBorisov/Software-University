import { createIdea } from '../api/data.js';

const section = document.getElementById('createPage');
const form = section.querySelector('form'); //взимаме формуляра
form.addEventListener('submit', onSubmit);//закачваме му ивен лисънър

let ctx = null; //взимаме си контекста

export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { title, description, imageURL } = Object.fromEntries(formData.entries());

    // const title = formData.get('title');
    // const description = formData.get('description');
    // const img = formData.get('imageURL');

    if (title.length < 6) {
        return alert('Title must be at least six characters!');
    }
    if (description.length < 10) {
        return alert('Description must be at least ten characters!');
    }
    if (imageURL.length < 5) {
        return alert('Image must be at least five characters!');
    }

    await createIdea( title, description, imageURL );

    form.reset();
    ctx.goTo('/catalog');
}