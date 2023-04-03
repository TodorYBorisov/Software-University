
import { del, get, post, put } from './api.js';
// ВАЖНО !! провери всички пътища !! от word

const endpoints = {

    byId: '/data/books/',
    myBooks: userId => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,

    // Бонус
    byBookId: bookId => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    byBookIdandUserId: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`
};

export async function getAllData() {
    return get('/data/books?sortBy=_createdOn%20desc');
}

export async function getById(id) {
    return get(endpoints.byId + id);
}

export async function createOffer(data) {
    return post('/data/books', data);
}

export async function updateOffer(id, data) {

    return put(endpoints.byId + id, data);
}

export async function deleteBook(id) {
    return del(endpoints.byId + id);
}

export async function getMyBooks(userId) {
    return get(endpoints.myBooks(userId));
}

//заявки за бонуса=======================
export async function likeBook(bookId) {
    return post('/data/likes', { bookId });
}

export async function getLikesByBookId(bookId) {
    return get(endpoints.byBookId(bookId));
}

export async function getByBookIdandUserId(bookId, userId) {
    return get(endpoints.byBookIdandUserId(bookId, userId));
}