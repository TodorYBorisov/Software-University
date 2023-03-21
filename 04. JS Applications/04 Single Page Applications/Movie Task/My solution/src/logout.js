import { showView } from './util.js';
import { homePage } from './home.js';
import { updateNav } from './util.js';

//const {token} = JSON.parse(localStorage.getItem('userData'));
//така може да достъпим директно токена

export async function logout() {

    const url = 'http://localhost:3030/users/logout';
    const options = {

        headers: { 'X-Authorization': JSON.parse(localStorage.getItem('userData')).token },
    };
    try {
        const response = await fetch(url, options);

        if (response.status !== 204) {
            throw new Error(`Error: ${response.statusText} - ${response.status}`);
        }

        localStorage.clear('userData');
        //localStorage.removeItem('userData');

        homePage();
        updateNav();
    } catch (error) {
        console.error(error.message);
    }
}