import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { layoutTemplate } from './views/layout.js';
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './data/auth.js';
import { catalogPage } from './views/catalog.js';
//import { detailsPage } from './views/details.js';
import { detailsBONUS } from './views/detailsBONUS.js';
import { createPage } from './views/create.js';
import { editPage } from './views/edit.js';
import { showMyBooks } from './views/myBooks.js';


// тест на auth.js и data.js с awai api.името на функцията
//import * as api from './data/data.js';
//window.api = api;

// TODO да сменя къде да се ренди съдържанието
const root = document.getElementById('container');


page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/catalog', catalogPage);
page('/my-books', showMyBooks);
//page('/catalog/:id', detailsPage);
page('/catalog/:id', detailsBONUS);
page('/catalog/:id/edit', editPage);
page('/create', createPage);
page('/login', loginPage);
page('/register', registerPage);
page('/logout', logoutAction);

page.start();

// това е нашия глобален middleware
function decorateContext(ctx, next) {

    ctx.render = renderView;

    next();
}


// TODO inject dependencies
function renderView(content) {

    const userData = getUserData();
    render(layoutTemplate(userData, content), root);
}

function logoutAction(ctx) {
    logout();
    ctx.page.redirect('/catalog');
}