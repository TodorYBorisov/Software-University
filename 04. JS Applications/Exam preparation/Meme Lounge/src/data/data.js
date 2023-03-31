import { del, get, post, put } from './api.js';

export async function getAllData() {
    return get('/data/memes?sortBy=_createdOn%20desc');
}


export async function createShoe(data) {
    return post('/data/memes', data);
}


export async function getShoeById(id) {
    return get(`/data/memes/${id}`);
}


export async function deleteShoe(id) {
    return del(`/data/memes/${id}`);
}


export async function editShoe(id, data) {
    return put(`/data/memes/${id}`, data);
}

// заявка, за да си вземем нашите мемета на база userId
export async function getMyMemes(userId) {
    return get(`/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
