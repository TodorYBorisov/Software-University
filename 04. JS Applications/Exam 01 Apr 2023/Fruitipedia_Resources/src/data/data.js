import { del, get, post, put } from './api.js';
// ВАЖНО !! провери всички пътища !! от word

// заявка за взимане на всички данни от базата
export async function getAllData() {
    return get('/data/fruits?sortBy=_createdOn%20desc');
}

//заявка за създаване на която подаваем деструктурирания обект от формуляра
export async function createItem(data) {
    return post('/data/fruits', data);
}

//заявка за взимане на конкретната item на който сме влезли да води към Details
export async function getItemById(id) {
    return get(`/data/fruits/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteItem(id) {
    return del(`/data/fruits/${id}`);
}

// заявка за Edit на елемента когато е наш
export async function editItem(id, data) {
    return put(`/data/fruits/${id}`, data);
}


// заявка за търсене на нещо в масива от data
export function getSearchedFruit(query) {
    return get(`/data/fruits?where=name%20LIKE%20%22${query}%22`);
}
