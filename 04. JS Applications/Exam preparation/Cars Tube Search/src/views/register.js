import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
//@submit=${onRegister}
const registerTemplate = (onRegister) => html`
<section id="register">
    <div class="container">
        <form @submit=${onRegister} id="register-form">
            <h1>Register</h1>
            <p>Please fill in this form to create an account.</p>
            <hr>

            <p>Username</p>
            <input type="text" placeholder="Enter Username" name="username" required>

            <p>Password</p>
            <input type="password" placeholder="Enter Password" name="password" required>

            <p>Repeat Password</p>
            <input type="password" placeholder="Repeat Password" name="repeatPass" required>
            <hr>

            <input type="submit" class="registerbtn" value="Register">
        </form>
        <div class="signin">
            <p>Already have an account?
                <a href="/login">Sign in</a>.
            </p>
        </div>
    </div>
</section>`;

export function registerPage(ctx) {
    ctx.render(registerTemplate(createSubmitHandler(onRegister)));

    // TODO да сменим, обекта ако се налага email и password
    // закачаме ф-ята на формата като submit eventListener като след <form @submit=${onRegister}>
    // параметъра който го подаваме го деструктурираме {email, password}
    // Ako има re-pass с тире, смени обека да е datа и ги извади през обекта data.email... data[re-pass]
    async function onRegister({ username , password, ['repeatPass']: repass }, form) {

        // тук правим валидацията
        if (username  === '' || password === '') {
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

        await register(username , password);

        form.reset();
        // зачиства полетата на формуляра

        // TODO да сложа към къде да редиректне според условието след login
        ctx.page.redirect('/catalog');

    }
}