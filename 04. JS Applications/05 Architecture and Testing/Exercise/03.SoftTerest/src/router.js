
//Екпортитаме функция която да инициализира контролерите
export function initialize(links) {
    const main = document.querySelector('main');
    const nav = document.querySelector('nav');
    nav.addEventListener('click', onNavigate);

    const context = { //2. парвим контекст и му подаваем showSection
        showSection,
        goTo,
        updateNav
    };

    return context;

    function showSection(section) {
        main.replaceChildren(section);
    };

    //4. закачаме ивен лисънър на нав бара

    function onNavigate(event) {//за да размебем че сме кликнали на линк event.target=A

        let target = event.target;//това е като се цъкне на снимката
        if (target.tagName == 'IMG') {
            target = target.parentElement; //parenta e linka над снимката
        }

        if (target.tagName == 'A') {
            event.preventDefault();
            const url = new URL(target.href); //правим нов url и му подаваме ивента

            goTo(url.pathname);

            //url.pathname ни дава само името на url-а
            // const handler = links[url.pathname]; //така щесе вържат с рутиращата таблица
            // if (typeof handler === 'function') {
            //     handler(context);
            // }
        }
    }

    //5.1 ...params, ако има втори параметър по долу в хедлъра ще ги раздели на отделни параметри
    function goTo(name, ...params) {
        const handler = links[name]; //така ще се вържат с рутиращата таблица, за да покажем хоума
        if (typeof handler === 'function') {
            handler(context, ...params);
        }
    }

    // 6.Ъпдейт на навигационната лента след като сме добавили guest(login,register)/user(creat,logout) в html 
    function updateNav() {
        const user = localStorage.getItem('user');
        if (user) {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'block');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'none');
        } else {
            nav.querySelectorAll('.user').forEach(e => e.style.display = 'none');
            nav.querySelectorAll('.guest').forEach(e => e.style.display = 'block');
        }

    }

}

