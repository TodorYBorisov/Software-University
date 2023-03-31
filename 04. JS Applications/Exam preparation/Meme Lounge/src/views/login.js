import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';


const loginTemplate = (onLogin) => html`
<section id="login">
    <form @submit=${onLogin} id="login-form">
        <div class="container">
            <h1>Login</h1>
            <label for="email">Email</label>
            <input id="email" placeholder="Enter Email" name="email" type="text">
            <label for="password">Password</label>
            <input id="password" type="password" placeholder="Enter Password" name="password">
            <input type="submit" class="registerbtn button" value="Login">
            <div class="container signin">
                <p>Dont have an account?<a href="/register">Sign up</a>.</p>
            </div>
        </div>
    </form>
</section>`;

export function loginPage(ctx) {
    ctx.render(loginTemplate(createSubmitHandler(onLogin)));

    async function onLogin({ email, password }, form) {

        const notification = document.getElementById('errorBox');
        const alertText = notification.querySelector('span');

        function alertFnMessage(message) {
            notification.style.display = 'inline-block';
            alertText.textContent = message;
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }

        if (email == '' || password == '') {
           
            return alertFnMessage('Email or password don\'t match!');
        }
        await login(email, password);

        form.reset();

        ctx.page.redirect('/catalog');

    }
}