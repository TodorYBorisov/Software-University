const registerSection = document.getElementById('register');

export function showRegister() {
    document.querySelector('main').replaceChildren(registerSection);
}