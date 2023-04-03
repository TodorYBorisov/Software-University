import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { createSubmitHandler } from '../util.js';

// TODO да се замени с актуалния home from html file
const loginTemplate = (onLogin) => html`
<section id="login-page" class="login">
  <form @submit=${onLogin} id="login-form" action="" method="">
    <fieldset>
      <legend>Login Form</legend>
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
      <input class="button submit" type="submit" value="Login">
    </fieldset>
  </form>
</section>`;

export function loginPage(ctx) {
  ctx.render(loginTemplate(createSubmitHandler(onLogin)));

  // TODO да сменим, обекта ако се налага email и password
  // закачаме ф-ята на формата като submit eventListener каро след <form @submit=${onLogin}>
  // параметъра който го подаваме го деструктурираме {email, password}
  // Ако Полето на поребителя има допълнителни полета добавяме в обекта и с подадените параметри
  async function onLogin({ email, password }, form) {

    // тук правим валидацията
    if (email == '' || password == '') {
      // notification.textContent = 'All fileds must be filled!';
      return alert('No empty fields allowed!');
    }

    await login(email, password);

    form.reset();
    // зачиства полетата на формуляра

    // TODO да сложа към къде да редиректне според условието след login
    ctx.page.redirect('/catalog');

  }
}