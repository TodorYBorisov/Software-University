window.addEventListener('load', checkUserStatus);

const homeBtn = document.getElementById('home');
const logoutBtn = document.getElementById('logout');
const loginBtn = document.getElementById('login');
const registerBtn = document.getElementById('register');
const welcome = document.querySelector('.email span');
// Check if the user is logged or not

function checkUserStatus() {

    if (localStorage.getItem('accessToken') === null) {
        homeBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'inline-block';
        registerBtn.style.display = 'inline-block';
    } else {
        homeBtn.style.display = 'inline-block';
        logoutBtn.style.display = 'inline-block';
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
        welcome.textContent = localStorage.getItem('email');
    }
}
//     homeBtn.style.display = 'inlibe';
//     logoutBtn.style.display = 'none';
//     // btnRegister.style = 'pointer-events: none'; // Enable for Judge
//     const p = document.createElement('p');
//     p.className = 'email';
//     p.textContent = 'Please login';
//     p.style.webkitTextFillColor = 'red';

//     document.querySelector('nav>p').replaceWith(p);
//     btnLogin.addEventListener('click', () => window.location = 'login.html');
//     return;
// }
// // Enable the [Add] button and attach an event listener
// const btnAdd = document.querySelector('#addForm button');
// btnAdd.disabled = false;
// btnAdd.addEventListener('click', addCatche);
// // Hide [Login] and [Register] buttons
// document.querySelector('#guest').style.display = 'none';
// // Display the user name from seesion storage
// document.querySelector('nav>p>span').textContent = sessionStorage.getItem('userName');











//Logout
const token = localStorage.getItem('accessToken');

async function onLogout() {
    const url = 'http://localhost:3030/users/logout';
    const options = {
        headers: { 'X-Authorization': token },
    };
    await fetch(url, options);

    localStorage.clear();

    document.querySelector('#logout').style.display = 'none';
    document.querySelector('#addForm .add').disabled = 'true';
    document.querySelector('#guest').style.display = 'inline-block';
    document.querySelector('.email span').textContent = 'guest';

    window.location = ('./index.html');
}



