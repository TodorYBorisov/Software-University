import { showHome } from './home.js';

const loginSection = document.getElementById('login');

const loginForm = loginSection.querySelector('#login-form');
loginForm.addEventListener('submit', onLogin);

export function showLogin() {
    document.querySelector('main').replaceChildren(loginSection);
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password } = Object.fromEntries(formData.entries());

    if (email === '' || password === '') {

        return alert('No empy fields allowed!');
    };
 
    const url = 'http://localhost:3030/users/login';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify({ email, password })
    };

    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const userData = await response.json();

        localStorage.setItem('email', userData.email);
        localStorage.setItem('id', userData._id);
        localStorage.setItem('accessToken', userData.accessToken);

        loginForm.reset();

       showHome();

    } catch (error) {
        alert(error.message);
    }

}