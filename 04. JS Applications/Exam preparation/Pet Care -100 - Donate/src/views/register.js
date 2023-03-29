import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
const registerTemplate = (onRegister) => html`
<section id="registerPage">
    <form @submit=${onRegister} class="registerForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    // TODO да сменим, обекта ако се налага email и password
    // закачаме ф-ята на формата като submit eventListener като след <form @submit=${onRegister}>
    // параметъра който го подаваме го деструктурираме {email, password}
    // Ako има re-pass с тире, смени обека да е datа и ги извади през обекта data.email... data[re-pass]
    async function onRegister({ email, password, ['repeatPassword']: repass }, form) {

        // тук правим валидацията
        if (email === '' || password === '') {
            // notification.textContent = 'All fileds must be filled!';
            return alert('No empty fields allowed!');
        }

        if (password != repass) {
            // notification.textContent = 'Password must match!';
            return alert('Passwords does not match, please try again!');
        }
        // това са допълнителни проверки
        // if (password.length < 3) {
        //     return alert('Password must be at least three characters!');
        // }

        // if (email.length < 3) {
        //     return alert('Email must be at least three characters long!');
        // }

        await register(email, password);

        form.reset();
        // зачиства полетата на формуляра

        // TODO да сложа към къде да редиректне според условието след login
        ctx.page.redirect('/');

    }
}