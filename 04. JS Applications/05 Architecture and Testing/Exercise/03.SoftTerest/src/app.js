import * as api from './api/users.js'; // това го ползвахме за да тестваме заявките в браузъра
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { initialize } from './router.js';
import { logout } from './api/users.js';


document.getElementById('views').remove();

//2.рутираща таблица
const links = {

    '/': showHome,
    '/register': showRegister,
    '/login': showLogin,
    '/catalog': showCatalog,
    '/details': showDetails,
    '/create': showCreate,
    '/logout': onLogout
};

const router = initialize(links);
router.updateNav(); //6 идва от рутера,извикваме ъпдейта нава да стартира още при самото зарежданена страницата


// window.showHome = () => { //така може да извикаме функциятя в браузъра за да видим резултата с showHome()
//     showHome(context);
// };

//showHome(context);//1 викаме хоума, и му подавамв  2.контекста

//5 Да зареди началната страница home view
router.goTo('/');

function onLogout() {
    logout();

    localStorage.removeItem('user');
    router.updateNav();
    router.goTo('/');

}


