import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../util.js';
import { getSearchedItem } from '../data/data.js';


//@submit=${onSearch}/@click=${onSearch}
const searchTemplate = (isLogget,onSearch,foundProducts) => html`
<section id="search-cars">
            <h1>Filter by year</h1>

            <div @click=${onSearch} class="container">
                <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
                <button class="button-list">Search</button>
            </div>

            <h2>Results:</h2>

   
    ${foundProducts !== undefined 
        ? html`
            <div class="listings">
            ${foundProducts.length === 0 
                ? html`<p class="no-cars"> No results.</p>`
                : foundProducts.map(a => template(a, isLogget))} 
            </div>` 
        : null}  
</section>`;


const template = (temp) => html`
<div class="listing">
    <div class="preview">
        <img src="${temp.imageUrl}">
    </div>
    <h2>${temp.brand} ${temp.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${temp.year}</h3>
            <h3>Price: ${temp.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="/details/${temp._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;

export async function searchPage(ctx) {

    const userData = getUserData();
    const isLogget = userData !== null;

    ctx.render(searchTemplate(isLogget,onSearch));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта

    async function onSearch(event) {

        if(event.target.tagName === 'BUTTON'){
            const userInput  = document.getElementById('search-input').value.trim();
            if (userInput  === '') {
                alert('The search field cannot be empty!');
                return;
            }
            const foundProducts = await getSearchedItem(userInput);
            ctx.render(searchTemplate(isLogget, onSearch, foundProducts));
        }
    }
}