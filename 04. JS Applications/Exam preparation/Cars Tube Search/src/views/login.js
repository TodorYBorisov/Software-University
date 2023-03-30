import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
//@submit=${onLogin}
const loginTemplate = (onLogin) => html`
<section id="login">
    <div class="container">
        <form @submit=${onLogin} id="login-form" action="#" method="post">
            <h1>Login</h1>
            <p>Please enter your credentials.</p>
            <hr>

            <p>Username</p>
            <input placeholder="Enter Username" name="username" type="text">

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn" value="Login">
        </form>
        <div class="signin">
            <p>Dont have an account?
                <a href="/register">Sign up</a>.
            </p>
        </div>
    </div>
</section>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    // TODO да сменим, обекта ако се налага email и password
    // закачаме ф-ята на формата като submit eventListener каро след <form @submit=${onLogin}>
    // параметъра който го подаваме го деструктурираме {email, password}
    // Ако Полето на поребителя има допълнителни полета добавяме в обекта и с подадените параметри
    async function onLogin({ username, password }, form) {

        if (username == '' || password == '') {
            // notification.textContent = 'All fileds must be filled!';
            return alert('No empty fields allowed!');
        }
        await login(username, password);

        form.reset();
        // зачиства полетата на формуляра

        // TODO да сложа към къде да редиректне според условието след login
        ctx.page.redirect('/catalog');

    }
}