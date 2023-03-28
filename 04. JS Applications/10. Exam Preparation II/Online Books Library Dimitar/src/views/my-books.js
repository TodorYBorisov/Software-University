import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyBooks } from '../data/data.js';
import { getUserData } from '../util.js';


// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data) => html`
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${data.length == 0 ? html`
    <p class="no-books">No books in database!</p>` : html`
    <ul class="my-books-list">
        ${data.map(template)}
    </ul>`}
</section>`;

const template = (temp) => html`
    <li class="otherBooks">
        <h3>${temp.title}</h3>
        <p>Type: ${temp.type}</p>
        <p class="img"><img src="${temp.imageUrl}"></p>
        <a class="button" href="/details/${temp._id}">Details</a>
    </li>`;


export async function showMyBooks(ctx) {
    const userData = getUserData();

    //Aко не върви полвай това
    //const data =await getMyBooks(userData._id)

    const userId = userData._id ;
    const data = await getMyBooks(userId);
    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}