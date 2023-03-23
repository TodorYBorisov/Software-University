import { login } from '../api/users.js';


const section = document.getElementById('loginPage');

const form = section.querySelector('form'); //взимаме формуляра
form.addEventListener('submit', onSubmit);//закачваме му ивен лисънър

let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showSection(section);
}

//тази функция няма даостъп до context отгоре, затова правим една променлива и я сетваме на null
// след това вече може да достъпим контекста
async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    const { email, password } = Object.fromEntries(formData.entries());
    // const email = formData.get('email');
    // const password = formData.get('password');

    //викаме логина от user.js и му подаваме двата параметъра, който вече е сетнал нешата в локал сториджа
    await login(email, password);

    //за да редиректне към хоума полваме goTo през контекста
    form.reset();
    ctx.updateNav();
    ctx.goTo('/');
}