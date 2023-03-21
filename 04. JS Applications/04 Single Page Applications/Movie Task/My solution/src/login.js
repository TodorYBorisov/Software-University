import { showView } from './util.js';
import { homePage } from './home.js';
import { updateNav } from './util.js';

const section = document.querySelector('#form-login');
const form = document.getElementById('login-form');
form.addEventListener('submit', onSubmit);


export function loginPage() {
    showView(section);
}

async function onSubmit(event) {
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

        const data = await response.json();

        const userData = {
            id: data._id,
            email: data.email,
            token: data.accessToken
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        //const userData =JSON.parse(localStorage.getItem('userData'));//userData след парса вече е обект и може да се достъпва.

        // localStorage.setItem('email', userData.email);
        // localStorage.setItem('accessToken', userData.accessToken);
        // localStorage.setItem('_id', userData._id);

        //ресетваме формата
        //form.reset();
        updateNav();
        homePage();

    } catch (error) {
    
        alert(error.message);
        form.reset();
    }
}



