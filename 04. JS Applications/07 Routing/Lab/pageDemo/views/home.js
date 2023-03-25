import { html, render } from '../node_modules/lit-html/lit-html.js';

const homeTemplate = () => html`
<h1>Home page</h1>
<p>Welcome to our site</p>
`;

export function homePage(ctx) {
    
    ctx.render(homeTemplate());
}