import { showView } from './util.js';
import { homePage } from './home.js';
import { updateNav } from './util.js';

const section = document.querySelector('#form-sign-up');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

export function registerPage() {
    showView(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    //тук ги взимаме по name от html да внимавам1
    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());

    if (email === '' || password === '' || repeatPassword === '') {

        return alert('No empty fields allowed!');
    }

    if (password !== repeatPassword) {
        
        return alert('Passwords does not match, please try again!');
    }
    if (password.length < 6) {
        return alert('Password must be at least six characters!');
    }

    const url = 'http://localhost:3030/users/register';

    const options = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password, repeatPassword })
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

        //console.log(userData);

        updateNav();
        homePage();
    } catch (error) {
        
        alert(error.message);
        form.reset();
    }
}