import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllData } from '../data/data.js';


// TODO да се замени с актуалния catalog/Dashboard from html file
//${data.length == 0 ? html`` : data.map(template)}
//ако рендим в html елемент data.map го слагаме в html``

const catalogTemplate = (data) => html`
<section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">

        ${data.length == 0 ? html`<p class="no-cars">No cars in database.</p>` :
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

export async function catalogPage(ctx) {

    // данните който сме дръпнали от сървъра под формaта на [{},{}..]
    const data = await getAllData();

    ctx.render(catalogTemplate(data));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}