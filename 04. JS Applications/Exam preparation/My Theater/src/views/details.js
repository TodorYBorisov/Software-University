import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem } from '../data/data.js';
import { getUserData } from '../util.js';
import { getShoeById } from '../data/data.js';
import { likeBook , getLikesByBookId, getMyLikesByBookIdUserId} from '../data/data.js';

const detailsTemplate = (dataBook, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="detailsPage">
    <div id="detailsBox">
        <div class="detailsInfo">
            <h1>Title: ${dataBook.title}</h1>
            <div>
                <img src="${dataBook.imageUrl}" />
            </div>
        </div>

        <div class="details">
            <h3>Theater Description</h3>
            <p>${dataBook.description}</p>
            <h4>Date: ${dataBook.date}</h4>
            <h4>Author: ${dataBook.author}</h4>

            ${controlButtonTemplate(dataBook, isOwner, onDelete)}
            ${likeApplyControlsTeplate(showLikeButton, onLike)}

            <p class="likes">Likes: ${likes}</p>
        </div>
    </div>
</section>`;

//функация за контрол на бутоните
const controlButtonTemplate = (dataBook, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <div class="buttons">
                <a @click=${onDelete} class="btn-delete" href="javascript:void(0)">Delete</a>
                <a class="btn-edit" href="/edit/${dataBook._id}">Edit</a>   
            </div>`;
    } else {
        return null;
    }
};

//функция за лайкването 
const likeApplyControlsTeplate = (showLikeButton, onLike) => {
    if (showLikeButton) {
        return html`
        <div class="buttons">
            <a @click=${onLike} class="btn-like" href="javascript:void(0)">Like</a>
        </div>`;
    } else {
        return null;
    }
};

export async function detailsPage(ctx) {
    const theaterId = ctx.params.id; //взимаме id от контекста и си сетваме наше bookId
    const dataBook = await getShoeById(theaterId); // правяим заявка за взияки книги по bookId
    //const userData = getUserData(); // викаме данните на потребителя, за да си извадим неговото id
    const userId = getUserData()?._id;//проверяваме дали имаме регистриран юзър

    const isOwner = dataBook._ownerId === userId; // ако той е собсвеник

    const likes = await getLikesByBookId(theaterId); // това са всички лайкове
    const myLikes = await getMyLikesByBookIdUserId(theaterId, userId); //това са нашите лайкове

    const showLikeButton = !isOwner && !myLikes && userId; //показваме бутона само ако са изпълнени тези условия

    ctx.render(detailsTemplate(dataBook, isOwner, onDelete, likes, showLikeButton, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteItem(theaterId);
            ctx.page.redirect('/my-page');
        }
    }

    async function onLike() {
        await likeBook(theaterId);
        ctx.page.redirect(`/details/${theaterId}`); //редиректваме към конкретната на details  за да се обнови 
    }
}