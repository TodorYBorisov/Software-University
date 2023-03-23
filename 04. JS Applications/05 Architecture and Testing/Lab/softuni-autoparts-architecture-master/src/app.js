import { showHome } from './home.js';
import { showCatalog } from './catalog.js';
import { showLogin } from './login.js';
import { showDetails } from './details.js';


const views = {
    'home-link': showHome,
    'catalog-link': showCatalog,
    'login-link': showLogin
};

//делегиране на бутоните, за да се показва правилното вю
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
        const id = event.target.id; //id тук се явява id на бутона върху който сме цъкнали
        showView(id); //id ни е стринг
    }
});

document.getElementById('table').addEventListener('click', (event) => {
    if (event.target.tagName == 'A') {
        const id = event.target.dataset.id;
        showDetails(id);
    }
});

// Remove views from page
document.getElementById('views').remove();

const ctx = {
    showView
};

// Start application in home view
showView('home-link');


function showView(name) { //name = id от горе на бутона
    const view = views[name];//това вика функциите от обекта views горе
    if (typeof view == 'function') {
        view(ctx); //view = това вече става равно на showLogin, което пък подава ctx
    }
}