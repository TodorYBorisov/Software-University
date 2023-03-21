//1 хващаме всички секции с трите точки и скобите го превръща в масив 
const views = [...document.querySelectorAll('.view-section')];

//1.1 крием всички секции
export function hideAll() {

    views.forEach(s => s.style.display = 'none');
}

//2 правим функция която да показва вече скритите секции
export function showView(section) {
    hideAll();
    section.style.display = 'block';
}

//Спинер
// function spinner() {
//     const element = document.createElement('p');
//     element.innerHTML = 'Loading &hellip';
//     return element;
// }

//Ъпдейт на навигационната лента на база дали user е логнат
//Проверка дали е логнат потребителя 

export function updateNav() {

    const userData = JSON.parse(localStorage.getItem('userData'));
    const welcomeMsg = document.getElementById('welcome-msg');
    //тия с клас юзър влизат а тези с които са гости не им се показват тези бутони
    if (userData) {
        document.querySelectorAll('.user').forEach(btn => btn.style.display = 'inline-block');
        document.querySelectorAll('.guest').forEach(btn => btn.style.display = 'none');
        welcomeMsg.textContent =`Welcome, ${userData.email}`;
    } else {
        document.querySelectorAll('.user').forEach(btn => btn.style.display = 'none');
        document.querySelectorAll('.guest').forEach(btn => btn.style.display = 'block');
    }
}

