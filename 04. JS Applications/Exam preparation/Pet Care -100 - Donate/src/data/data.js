import { del, get, post, put } from './api.js';
// // ВАЖНО !! провери всички пътища !! от word

// заявка за всички данни от базата
export async function getAllData() {
    return get('/data/pets?sortBy=_createdOn%20desc&distinct=name');
}

//заявка за създаване на която подаваем деструктурирания обект от формата
export async function createShoe(data) {
    return post('/data/pets', data);
}

//заявка за взимане на конкретната книга/item на която сме влезли да води Към Details
export async function getShoeById(id) {
    return get(`/data/pets/${id}`);
}

// заявка за изтриваме елемента по id в details секцията
export async function deleteShoe(id) {
    return del(`/data/pets/${id}`);
}

// заявка за Edit на елемента
export async function editShoe(id, data) {
    return put(`/data/pets/${id}`, data);
}

//=======================
//Бонус нещо като лайковете
// за да добави лайк/дарение изпращаме това
export async function makeDonation(petId) {
    return post('/data/donation', { petId });
}


// заявка за получаване на общия брой лайкове/дарения
export async function getDonates(petId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`);
}


//заявка която е напарвена от специфичен userId за конкретно petId
export async function getUserDonate(petId, userId) {
    return get(`/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}