import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';

const main = document.querySelector('main');

export function addRender(ctx, next) {
    ctx.render = renderView;
    next();
}

function renderView(content) {
    render(content, main);
}