//това прави инициализация импортирайки файловете
import { showHome } from './home.js';
import { showLogin } from './login.js';
import { showCatalog } from './catalog.js';
import { showRegister } from './register.js';
import { showDetails } from './details.js';


//като се кликне на home-link ще се викне ф-ята showHome();
document.getElementById('home-link').addEventListener('click', showHome);

document.getElementById('catalog-link').addEventListener('click', showCatalog);

document.getElementById('login-link').addEventListener('click', showLogin);

document.getElementById('register-link').addEventListener('click', showRegister);

document.getElementById('table').addEventListener('click', (event) => {

    if (event.target.tagName == 'A') {//ако сме штракнали на линк
        const id = event.target.dataset.id; //с dataset хващаме data-id от детаийлс

        showDetails(id);
    }
});


//махаме секциите от main страницата
document.getElementById('views').remove();

//ДА зареди приложението в home view
showHome();
