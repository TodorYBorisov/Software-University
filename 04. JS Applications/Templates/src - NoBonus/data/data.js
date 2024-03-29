import { del, get, post, put } from './api.js';
// // ВАЖНО !! провери всички пътища !! от word

// заявка за всички данни от базата
export async function getAllData() {
    return get('/data/shoes?sortBy=_createdOn%20desc');
}

//заявка за създаване на която подаваем деструктурирания обект от формата
export async function createShoe(data) {
    return post('/data/shoes', data);
}

//заявка за взимане на конкретната книга/item на която сме влезли да води Към Details
export async function getShoeById(id) {
    return get(`/data/shoes/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteShoe(id) {
    return del(`/data/shoes/${id}`);
}

// заявка за Edit на елемента
export async function editShoe(id, data) {
    return put(`/data/shoes/${id}`, data);
}

// //тук си правим заявка да си вземем нашите книги по id
// export async function getMyBooks(userId) {
//     return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }


// //заявки за бонуса=======================

// // заявка за да видим кой са лайкнатите
// export async function likeBook(bookId) {
//     return post('/data/likes', { bookId });
// }

// export async function getLikesByBookId(bookId) {
//     return get(`/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
// }

// export async function getMyLikesByBookIdUserId(bookId, userId) {
//     return get(`/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
// }

//=================================