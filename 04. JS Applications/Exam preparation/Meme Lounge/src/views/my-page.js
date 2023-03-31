import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserData } from '../util.js';
import { getMyMemes } from '../data/data.js';

const catalogTemplate = (data, username, email, gender) => html`
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/${gender}.png">
        <div class="user-content">
            <p>Username: ${username}</p>
            <p>Email: ${email}</p>
            <p>My memes count: ${data.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">

        ${data.length === 0 ? html`<p class="no-memes">No memes in database.</p>` : data.map(template)}

    </div>
</section>`;

const template = (temp) => html`
    <div class="user-meme">
        <p class="user-meme-title">${temp.title}</p>
        <img class="userProfileImage" alt="meme-img" src="${temp.title}">
        <a class="button" href="/catalog/${temp._id}">Details</a>
    </div>`;

export async function showMyPage(ctx) {
    const userData = getUserData();
    const username = userData.username;
    const email = userData.email;
    const gender = userData.gender;
    const userId = userData._id;

    const data = await getMyMemes(userId);

    console.log(data);

    ctx.render(catalogTemplate(data, username, email, gender));
}
