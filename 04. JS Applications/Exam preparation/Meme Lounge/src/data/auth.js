import { clearUserData, setUserData } from '../util.js';
import { get, post } from './api.js';

// TODO да проверя пътя дали е такъв в документа с условието
const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
};

// TODO да се смени юзър обекта{} може да бъде (userName, email, avatar, password)
export async function login(email, password) {
    const result = await post(endpoints.login, { email, password });
    setUserData(result);
}

// TODO тук да видя как е записано от html name дали e repasss е правилно, ако трябва подаваме repass
export async function register(username, email, password, gender) {
    const result = await post(endpoints.register, { username, email, password, gender });
    setUserData(result);
}

export async function logout() {
    get(endpoints.logout);
    clearUserData();
}