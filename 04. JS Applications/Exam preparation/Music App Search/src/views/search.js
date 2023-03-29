import { html } from '../../node_modules/lit-html/lit-html.js';
import { getSearchedAlbum } from '../data/data.js';
import { getUserData } from '../util.js';

//@submit=${onSearch}/@click=${onSearch}
const searchTemplate = (isLogget,onSearch,foundProducts) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div @click=${onSearch} class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    ${foundProducts !== undefined 
        ? html`
            <div class="search-result">
            ${foundProducts.length === 0 
                ? html`<p class="no-result">No result.</p>`
                : foundProducts.map(a => template(a, isLogget))} 
            </div>` 
        : null}  
</section>`;

const template = (album, isLogget) => html`
    <div class="card-box">
        <img src="${album.imgUrl}">
        <div>
            <div class="text-center">
                <p class="name">Name: ${album.name}</p>
                <p class="artist">Artist: ${album.artist}</p>
                <p class="genre">Genre: ${album.genre}</p>
                <p class="price">Price: $${album.price}</p>
                <p class="date">Release Date: ${album.releaseDate}</p>
            </div>
            ${isLogget !== false ? html`
            <div class="btn-group">
                <a href="/details/${album._id}" id="details">Details</a>
            </div>` : null}
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
            const foundProducts = await getSearchedAlbum(userInput);
            ctx.render(searchTemplate(isLogget, onSearch, foundProducts));
        }
    }
}
