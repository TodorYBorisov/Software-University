import { html, render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { homePage } from '../views/home.js';
import { addRender } from './middleware/render.js';
import { catalogPage } from '../views/catalog.js';

const main = document.querySelector('main');

page(addRender);
page(middleware);
//препращане към houm page with redirect
page('/index.html', '/');

page('/', homePage);
page('/catalog', () => main.innerHTML = `<h1>Catalog</h1>
<ul>
    <li><a href="/catalog/1">Product 1</a></li>
    <li><a href="/catalog/2">Product 2</a></li>
    <li><a href="/catalog/3">Product 3</a></li>
</ul>`);
page('/catalog', catalogPage)

// ако сложим productId (става името на свойството което е в контекста)ще отива динамичнопо този начин
page('/catalog/:productId', , productPage);
page('/catalog/:category/:productId', catagory);
page('/about', () => main.innerHTML = 'about page');
page('*', () => main.innerHTML = '404 Page not foud');

page.start();

function homePage(ctx) {

    main.innerHTML = 'home-path';
}

//през тази функция получаваме достъп до контекста и некс
function middleware(ctx, next) {

    ctx.render = (content) => render(content, main)

    next();
}
function productPage(ctx) {
    // console.log(ctx);

    main.innerHTML = 'product page' + ctx.params.productId;
}

//така може да напарвим под категория 
function catagory(ctx) {
    const catagoryName = ctx.params.category;
    const id = ctx.params.id;
    main.innerHTML = `<h1>Catalog</h1>
    <h2>${catagoryName}</h2>
    <p>Viewing product: ${id}</p>
    <button>Back to catalog</button>`;

    document.querySelector('button').addEventListener('click', () => {
        page.redirect('/catalog');
    });


}