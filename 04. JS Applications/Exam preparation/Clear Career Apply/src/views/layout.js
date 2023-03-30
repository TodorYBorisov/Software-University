import { html } from '../../node_modules/lit-html/lit-html.js';

// TODO да заменим с актуалния изглед(actual layout)
// идеятя му е да покаже дали имa потребител и правилното съдържание
export const layoutTemplate = (userData, content) => html`
<header>
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.jpg" alt="" /></a>

    <nav>
        <div>
            <a href="/catalog">Dashboard</a>
        </div>

        ${userData ? html`
        <div class="user">
            <a href="/create">Create Offer</a>
            <a href="/logout">Logout</a>
        </div>` : html`
        <div class="guest">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>`}
    </nav>
</header>

<main>
    ${content}
</main>`;
// ако имаме потребител му показваме logout ако нямаме другите два бутона за login & register
