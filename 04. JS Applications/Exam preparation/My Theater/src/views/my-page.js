import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../util.js';
import { getMyTheaters } from '../data/data.js';


// TODO да се замени с актуалния catalog/Dashboard from html file
const catalogTemplate = (data, email) => html`
<section id="profilePage">
    <div class="userInfo">
        <div class="avatar">
            <img src="./images/profilePic.png">
        </div>
        <h2>${email}</h2>
    </div>
    <div class="board">
        
        ${data.length == 0 ? html`<div class="no-events">
            <p>This user has no events yet!</p>
        </div>` :
         data.map(template)}

    </div>
</section>`;

const template = (temp) => html`
<div class="eventBoard">
    <div class="event-info">
        <img src="${temp.imageUrl}">
        <h2>${temp.title}</h2>
        <h6>${temp.date}</h6>
        <a href="/details/${temp._id}" class="details-button">Details</a>
    </div>
</div>`;

export async function showMyPage(ctx) {
    const userData = getUserData();

    //Aко не върви полвай това
    //const data =await getMyBooks(userData._id)
    const email = userData.email;
    const userId = userData._id;
    const data = await getMyTheaters(userId);
    ctx.render(catalogTemplate(data, email));
    // ако няма нищо на сървъра тествай с подаване на [] на темплейта
}