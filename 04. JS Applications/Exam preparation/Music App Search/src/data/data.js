import { del, get, post, put } from './api.js';
// // ВАЖНО !! провери всички пътища !! от word

// заявка за всички данни от базата
export async function getAllData() {
    return get('/data/albums?sortBy=_createdOn%20desc&distinct=name');
}

//заявка за създаване на която подаваем деструктурирания обект от формата
export async function createAlbum(data) {
    return post('/data/albums', data);
}

//заявка за взимане на конкретната книга/item на която сме влезли да води Към Details
export async function getAlbumById(id) {
    return get(`/data/albums/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteShoe(id) {
    return del(`/data/albums/${id}`);
}

// заявка за Edit на елемента
export async function editAlbum(id, data) {
    return put(`/data/albums/${id}`, data);
}

// заявка за търсене на нещо в масива от data
export function getSearchedAlbum(query) {
    return get(`/data/albums?where=name%20LIKE%20%22${query}%22`);
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