import { get, post } from '../api/api.js';

//Да проверя тези крайни точки ако са различни
const endpoints = {
    'login': '/users/login',
    'register': '/users/register',
    'logout': '/users/logout'
};

// да проверя дали не е email/userName/user
export async function login(email, password) {
    const user = await post(endpoints.login, { email, password });
    localStorage.setItem('user', JSON.stringify(user));
}

//тук да видя ot name дали repasss е правилно, ако трябва подаваме репас
export async function register(email, password,repeatPassword) {
    const user = await post(endpoints.register, { email, password,repeatPassword });
    localStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {
    get(endpoints.logout);
    localStorage.removeItem('user');
}