import { html, render } from '../node_modules/lit-html/lit-html.js';

const catalogTemplate = (list) => html`
<h1>Catalog page</h1>
<ul>${list.map(productTeplate)}</ul>;
`;

const productTeplate =(item)=> html 
<li>${item.label}</li>

export function catalogPage(ctx) {
    
    ctx.render(catalogTemplate());
}

