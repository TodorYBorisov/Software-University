import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="form">
        <h2>Register</h2>
        <form @submit=${onRegister} class="login-form">
            <input type="text" name="email" id="register-email" placeholder="email" />
            <input type="password" name="password" id="register-password" placeholder="password" />
            <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
            <button type="submit">login</button>
            <p class="message">Already registered? <a href="/login">Login</a></p>
        </form>
    </div>
</section>`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    // TODO да сменим, обекта ако се налага email и password
    // закачаме ф-ята на формата като submit eventListener като след <form @submit=${onRegister}>
    // параметъра който го подаваме го деструктурираме {email, password}
    // Ako има re-pass с тире, смени обека да е datа и ги извади през обекта data.email... data[re-pass]
    async function onRegister({ email, password, ['re-password']: repass }, form) {

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
        ctx.page.redirect('/catalog');

    }
}