// import { html } from '../../node_modules/lit-html/lit-html.js';
// import { deleteBook, getById } from '../data/data.js';
// import { getUserData } from '../util.js';

// // TODO да се замени с актуалния catalog/Dashboard from html file
// const detailsTemplate = (dataBook, onDelete) => html`
// <section id="details-page" class="details">
//     <div class="book-information">
//         <h3>${dataBook.title}</h3>
//         <p class="type">Type: ${dataBook.type}</p>
//         <p class="img"><img src="${dataBook.imageUrl}"></p>
//         <div class="actions">

//             <!-- Edit/Delete buttons ( Only for creator of this book )  -->
//             ${dataBook.canEdit ? html`
//             <a class="button" href="/catalog/${dataBook._id}/edit">Edit</a>
//             <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>` : 
//             html`<div class="likes">
//                 <img class="hearts" src="/images/heart.png">
//                 <span id="total-likes">Likes: 0</span>
//             </div>`}


//             <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
//             <!-- <a class="button" href="#">Like</a> -->

           
//         </div>
//     </div>
//     <div class="book-description">
//         <h3>Description:</h3>
//         <p>${dataBook.description}</p>
//     </div>
// </section>`;

// // const template = (temp) => html`
// // `;

// export async function detailsPage(ctx) {

//     // своиството се казва id, защото в page сме го сложили да е /:id
//     const id = ctx.params.id;

//     // данните който сме дръпнали от сървъра под формaта на [{},{}..]
//     const dataBook = await getById(id);

//     const userData = getUserData(); // дърпаме данните за потребителя и проверяваме
//     if (userData && userData._id == dataBook._ownerId) {
//         dataBook.canEdit = true;
//     }

//     ctx.render(detailsTemplate(dataBook, onDelete));
//     // ако няма нищо на сървъра тествай с подаване на [] на темплейта

//     async function onDelete() {
//         const choice = confirm('Are you sure?');

//         if (choice) {
//             await deleteBook(id);
//             ctx.page.redirect('/catalog');
//         }
//     }
// }