import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSearchedShoes } from '../data/data.js';
import { getUserData } from '../util.js';

const searchTemplate = (onSearch, isLogget, foundProducts,) => html`
<section id="search">
    <h2>Search by Brand</h2>

    <form @submit=${onSearch} class="search-wrapper cf">
        <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
        <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>
    <div id="search-container">
        ${foundProducts.length == 0 ? html`
        <h2>There are no results found.</h2>` : html`
        <ul class="card-wrapper">
            ${foundProducts.map(p => template(p, isLogget))}
        </ul>`}
    </div>
</section>`;


const template = (shoe, isLogget) => html`
    <li class="card">
        <img src="${shoe.imageUrl}" alt="eminem" />
        <p><strong>Brand: </strong><span class="brand">${shoe.brand}</span></p>
        <p><strong>Model: </strong><span class="model">${shoe.model}</span></p>
        <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
        ${isLogget !== false ? html` <a class="details-btn" href="/details/${shoe._id}">Details</a>` : null}
    
    </li>`;


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
        foundProducts = await getSearchedShoes(query);
        ctx.render(searchTemplate(onSearch, isLogget, foundProducts));
    }
}
