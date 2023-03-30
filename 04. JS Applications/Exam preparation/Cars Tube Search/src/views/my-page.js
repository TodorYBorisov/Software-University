import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../util.js';
import { getMyCars } from '../data/data.js';


// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data) => html`
<section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">

        ${data.length == 0 ? html`<p class="no-cars"> You haven't listed any cars yet.</p>` :
       data.map(template)}
    </div>
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

export async function showMyPage(ctx) {
    const userData = getUserData();

    //Aко не върви полвай това
    //const data =await getMyBooks(userData._id)

    const userId = userData._id;
    const data = await getMyCars(userId);
    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}