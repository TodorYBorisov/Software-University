// 3 импортираме си функциите
import { hideAll } from './util.js';
import { homePage } from './home.js';
import { loginPage } from './login.js';
import { registerPage } from './register.js';
import { creatPage } from './create.js';
import { updateNav } from './util.js';
import { logout } from './logout.js';


//3.1крием всички секции
hideAll();


//7 зареждаме ги в обекта 
const routs = {
    '/': homePage,
    '/login': loginPage,
    '/logout': logout,
    '/register': registerPage,
    '/create': creatPage
};


document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

//4 правим делегация на нав addMovie бутоните 
function onNavigate(event) {
    if (event.target.tagName == 'A' && event.target.href) {
        event.preventDefault();
        const url = new URL(event.target.href);

        const view = routs[url.pathname];

        if (typeof view == 'function') {
            view();
        }
    }
}



//стартира страницата в начален режим
updateNav();
//показваме хоум пейджа
homePage();