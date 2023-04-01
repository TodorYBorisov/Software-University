import { del, get, post, put } from './api.js';
// // ВАЖНО !! провери всички пътища !! от word

// заявка за взимане на всички данни от базата
export async function getAllData() {
    return get('/data/albums?sortBy=_createdOn%20desc');
}

//заявка за създаване на която подаваем деструктурирания обект от формуляра
export async function createItem(data) {
    return post('/data/albums', data);
}

//заявка за взимане на конкретната item на който сме влезли да води към Details
export async function getItemById(id) {
    return get(`/data/albums/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteItem(id) {
    return del(`/data/albums/${id}`);
}

// заявка за Edit на елемента когато е наш
export async function editItem(id, data) {
    return put(`/data/albums/${id}`, data);
}

// //тук си правим заявка да си вземем нашите айтъми по id за /my-page
// export async function getMyBooks(userId) {
//     return get(`/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
// }


// заявки за бонуса=========LIKE=============

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