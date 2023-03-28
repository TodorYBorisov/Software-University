import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteBook, getBookById, getLikesByBookId, getMyLikesByBookIdUserId } from '../data/data.js';
import { getUserData } from '../util.js';
import { likeBook } from '../data/data.js';

// TODO да се замени с актуалния catalog/Dashboard from html file
const detailsTemplate = (dataBook, isOwner, onDelete, likes, showLikeButton, onLike) => html`
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${dataBook.title}</h3>
        <p class="type">${dataBook.type}</p>
        <p class="img"><img src="${dataBook.imageUrl}"></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->

            ${controlButtonTemplate(dataBook, isOwner, onDelete)}
            ${likeApplyControlsTeplate(showLikeButton, onLike)}
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${dataBook.description}</p>
    </div>
</section>`;

//функация за контрол на бутоните
const controlButtonTemplate = (dataBook, isOwner, onDelete) => {
    if (isOwner) {
        return html`
        <a class="button" href="/edit/${dataBook._id}">Edit</a>
        <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`;
    } else {
        return null;
    }
};

//функция за лайкването
const likeApplyControlsTeplate = (showLikeButton, onLike) => {
    if (showLikeButton) {
        return html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`;
    } else {
        return null;
    }
};

export async function detailsPage(ctx) {
    const bookId = ctx.params.id; //взимаме id от контекста и си сетваме наше bookId
    const dataBook = await getBookById(bookId); // правяим заявка за взияки книги по bookId
    //const userData = getUserData(); // викаме данните на потребителя, за да си извадим неговото id
    const userId = getUserData()?._id;//проверяваме дали имаме регистриран юзър

    const isOwner = dataBook._ownerId === userId; // ако той е собсвеник

    const likes = await getLikesByBookId(bookId); // това са всички лайкове
    const myLikes = await getMyLikesByBookIdUserId(bookId, userId); //това са нашите лайкове

    const showLikeButton = !isOwner && !myLikes && userId; //показваме бутона само ако са изпълнени тези условия

    ctx.render(detailsTemplate(dataBook, isOwner, onDelete, likes, showLikeButton, onLike));

    async function onDelete() {
        const choice = confirm('Are you sure?');

        if (choice) {
            await deleteBook(bookId);
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await likeBook(bookId);
        ctx.page.redirect(`/details/${bookId}`); //редиректваме към конкретната на details  за да се обнови 
    }
}