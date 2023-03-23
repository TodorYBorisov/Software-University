import * as api from './api.js'; //импортвамги, за да може да ползваме get, post,put, delete 

//слагаме адреса от сървърза коiто ще да зареди всички неша от него
const endpoints = {
    'ideas': '/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc',
    'create': '/data/ideas',
    'ideaById': '/data/ideas/'

};


//по този начин гетваме данните от сървъра, и ги импорваме към гаталога
export async function getAllideas() {
    //return [] така тестваме ако върне празен масив заявката 
    return api.get(endpoints.ideas);
}


// на функцията подаваме параметър защото това са данните който метода ползва
// трябва да добавим и в endopints пътя
export async function createIdea(title, description, img) {
    return api.post(endpoints.create, { title, description, img });//сървъра трябва да е img
}

//фунция да показва детайлите на баа ид-то на бутокоето добавихме в каталога
export async function getById(id) {
    return api.get(endpoints.ideaById + id);
}

//функциятя за изтирване като провери път в ednpoints дали съвпада
export async function deleteById(id) {
    return api.delete(endpoints.ideaById + id);
}