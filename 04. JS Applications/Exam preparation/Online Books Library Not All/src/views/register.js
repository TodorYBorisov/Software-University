import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
const registerTemplate = (onRegister) => html`
<section id="register-page" class="register">
    <form @submit=${onRegister} id="register-form" action="" method="">
        <fieldset>
            <legend>Register Form</legend>
            <p class="field">
                <label for="email">Email</label>
                <span class="input">
                    <input type="text" name="email" id="email" placeholder="Email">
                </span>
            </p>
            <p class="field">
                <label for="password">Password</label>
                <span class="input">
                    <input type="password" name="password" id="password" placeholder="Password">
                </span>
            </p>
            <p class="field">
                <label for="repeat-pass">Repeat Password</label>
                <span class="input">
                    <input type="password" name="confirm-pass" id="repeat-pass" placeholder="Repeat Password">
                </span>
            </p>
            <input class="button submit" type="submit" value="Register">
        </fieldset>
    </form>
</section>`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    // TODO да сменим, обекта ако се налага email и password
    // закачаме ф-ята на формата като submit eventListener като след <form @submit=${onRegister}>
    // параметъра който го подаваме го деструктурираме {email, password}
    // Ako има re-password с тире, го сменяме по този начин ['re-password']: repass
    async function onRegister({ email, password, ['confirm-pass']: repass }, form) {

        // тук правим валидацията
        if (email == '' || password == '') {
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