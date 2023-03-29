import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
const loginTemplate = (onLogin) => html`
<section id="loginPage">
    <form @submit=${onLogin} class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
    </form>
</section>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    // TODO да сменим, обекта ако се налага email и password
    // закачаме ф-ята на формата като submit eventListener каро след <form @submit=${onLogin}>
    // параметъра който го подаваме го деструктурираме {email, password}
    // Ако Полето на поребителя има допълнителни полета добавяме в обекта и с подадените параметри
    async function onLogin({ email, password }, form) {

        if (email == '' || password == '') {
            // notification.textContent = 'All fileds must be filled!';
            return alert('No empty fields allowed!');
        }
        await login(email, password);

        form.reset();
        // зачиства полетата на формуляра

        // TODO да сложа към къде да редиректне според условието след login
        ctx.page.redirect('/');

    }
}