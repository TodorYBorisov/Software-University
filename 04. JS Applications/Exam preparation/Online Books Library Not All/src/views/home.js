import { html } from '../../node_modules/lit-html/lit-html.js';


//TODO да се замени с актуалния home from html file
const homeTemplate = () => html`
`;

export function homePage(ctx) {
    ctx.render(homeTemplate());
}

