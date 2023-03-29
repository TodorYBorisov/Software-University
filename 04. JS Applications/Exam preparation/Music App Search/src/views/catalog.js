import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';
import { getUserData } from '../util.js';


// TODO да се замени с актуалния catalog/Dashboard from html file
//${data.length == 0 ? html`` : data.map(template)}
//ако рендим в html елемент data.map го слагаме в html``
const catalogTemplate = (data) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${data.length == 0 
        ? html`<p>No Albums in Catalog!</p>` : data.map(template)}
</section>`;

const template = (temp) => html`
<div class="card-box">
    <img src="${temp.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${temp.name}</p>
            <p class="artist">Artist: ${temp.artist}</p>
            <p class="genre">Genre: ${temp.genre}</p>
            <p class="price">Price: $${temp.price}</p>
            <p class="date">Release Date: ${temp.releaseDate}</p>
        </div>
        ${getUserData() ? html `    
        <div class="btn-group">
            <a href="/details/${temp._id}" id="details">Details</a>
        </div>` : null}
        
    </div>
</div>`;
//тук правим проверка дали имам логнат потребител

export async function catalogPage(ctx) {

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const data = await getAllData();
    
    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}