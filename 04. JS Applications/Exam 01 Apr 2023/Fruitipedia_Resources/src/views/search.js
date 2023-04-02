import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSearchedFruit } from '../data/data.js';
import { getUserData } from '../util.js';

const searchTemplate = (onSearch, isLogget, foundProducts,) => html`
<section id="search">

    <div class="form">
        <h2>Search</h2>
        <form @submit=${onSearch} class="search-form">
            <input type="text" name="search" id="search-input" />
            <button class="button-list">Search</button>
        </form>
    </div>
    <h4>Results:</h4>
    <div class="search-result">

        ${foundProducts.length == 0 ? html`<p class="no-result">No result.</p>` : 
        html`${foundProducts.map(p => template(p, isLogget))}`}

    </div>
</section>`;


const template = (card, isLogget) => html`
<div class="fruit">
    <img src="${card.imageUrl}" alt="example1" />
    <h3 class="title">${card.name}</h3>
    <p class="description">${card.description}</p>
    <a class="details-btn" href="/details/${card._id}">More Info</a>
</div>`;


export async function searchPage(ctx) {

    const userData = getUserData();
    const isLogget = userData !== null;

    let foundProducts = [];

    ctx.render(searchTemplate(onSearch, isLogget, foundProducts));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onSearch(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const query = formData.get('search');
        if (query === '') {
            alert('The search field must not be empty!');
            return;
        }
        foundProducts = await getSearchedFruit(query);
        ctx.render(searchTemplate(onSearch, isLogget, foundProducts));
    }
}