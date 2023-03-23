import { register } from '../api/users.js';

const section = document.getElementById('registerPage');

const form = section.querySelector('form'); //взимаме формуляра
form.addEventListener('submit', onSubmit);//закачваме му ивен лисънър

let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password, repeatPassword } = Object.fromEntries(formData.entries());

    // const email = formData.get('email');
    // const password = formData.get('password');
    // const rePass = formData.get('repeatPassword');

    if (email === '' || password === '' || repeatPassword === '') {
        //notification.textContent = 'All fileds must be filled!';
        return alert('No empty fields allowed!');
    }

    if (password !== repeatPassword) {
        // notification.textContent = 'Password must match!';
        return alert('Passwords does not match, please try again!');
    }

    if (password.length < 3) {
        return alert('Password must be at least three characters!');
    }

    if (email.length < 3) {
        return alert('Email must be at least three characters long!');
    }

    await register(email, password, repeatPassword);

    form.reset();
    ctx.updateNav();
    ctx.goTo('/');

}