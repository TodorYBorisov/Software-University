const itemName = 'userData';

// взима потребителските данни
export function getUserData() {
    return JSON.parse(localStorage.getItem(itemName));
}

// запазваме потребителските данни в localStorage
export function setUserData(data) {
    return localStorage.setItem(itemName, JSON.stringify(data));
}

// изтриваме потребителските данни
export function clearUserData() {
    localStorage.removeItem(itemName);
}


// правим функция eventListenr on submit
// получаваме данните от формуляря в data
export function createSubmitHandler(callback) {
    return function (event) {
        event.preventDefault();
        const form = event.currentTarget;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        //това тримва полетата в register i login
        for (let input in data) {
            data[input] = data[input].trim();
        }
        callback(data, form);
    };

}

// const notification = document.querySelector('.notification');
// const alertText = notification.querySelector('span');


// export function alertFnMessage(message) {
//     notification.style.display = 'block';
//     alertText.textContent = message;
    
//     setTimeout(() => {
//         notification.style.display = 'none';
//     }, 3000);
// }