//взимаме референция към main, за да може да покзваме секциите
const main = document.querySelector('main');

//взимаме референции към секциите
const views = {
    home: document.getElementById('home'),
    catalog: document.getElementById('catalog'),
    login: document.getElementById('login')
};

//махаме секциите от main страницата
Object.values(views).forEach(v => {
    v.remove();
});//алтернатива е да вземем document.getElementById('views').remove(),

//закчване на началана старница home view
main.replaceChildren(views.home);

//replaceChildren ще изтрие текущото съдържание и ще добави новото
document.getElementById('home-link').addEventListener('click', () => {
    main.replaceChildren(views.home);

});
document.getElementById('catalog-link').addEventListener('click', () => {
    main.replaceChildren(views.catalog);
});
document.getElementById('login-link').addEventListener('click', () => {
    main.replaceChildren(views.login);
});