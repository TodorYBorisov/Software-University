import { del, get, post, put } from './api.js';
// // ВАЖНО !! провери всички пътища !! от word

// заявка за всички данни от базата
export async function getAllData() {
    return get('/data/theaters?sortBy=_createdOn%20desc&distinct=title');
}

//заявка за създаване на която подаваем деструктурирания обект от формата
export async function createShoe(data) {
    return post('/data/theaters', data);
}

//заявка за взимане на конкретната книга/item на която сме влезли да води Към Details
export async function getShoeById(id) {
    return get(`/data/theaters/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteItem(id) {
    return del(`/data/theaters/${id}`);
}

// заявка за Edit на елемента
export async function editShoe(id, data) {
    return put(`/data/theaters/${id}`, data);
}

// //тук си правим заявка да си вземем нашите книги по id
export async function getMyTheaters(userId) {
    return get(`/data/theaters?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}


// //заявки за бонуса=======================

// заявка за да видим кой са лайкнатите
export async function likeBook(theaterId) {
    return post('/data/likes', { theaterId });
}


export async function getLikesByBookId(theaterId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22&distinct=_ownerId&count`);
}

export async function getMyLikesByBookIdUserId(theaterId, userId) {
    return get(`/data/likes?where=theaterId%3D%22${theaterId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

//=================================