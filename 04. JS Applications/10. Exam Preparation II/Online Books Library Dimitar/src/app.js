import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { homePage } from './views/home.js';
import { getUserData } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { logout } from './data/auth.js';
import { registerPage } from './views/register.js';
import { loginPage } from './views/login.js';
import { createPage } from './views/create.js';
import { showMyBooks } from './views/my-books.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

// тест на user.js и data.js с awai api.името на функцията
//import * as api from './data/data.js';
//window.api = api;

// TODO да сменя къде да се ренди съдържанието
const root = document.getElementById('container');

page(decorateContext);
page('index.html', '/');
page('/', homePage);
page('/register', registerPage);
page('/login', loginPage);
page('/logout', logoutAction);
page('/create', createPage);
page('/edit/:id', editPage);
page('/my-books', showMyBooks);
page('/details/:id', detailsPage);


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
    ctx.page.redirect('/');
}