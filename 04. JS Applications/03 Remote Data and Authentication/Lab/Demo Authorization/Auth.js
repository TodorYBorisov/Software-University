 

document.getElementById('register-form').addEventListener('submit', onRegister);
document.getElementById('login-form').addEventListener('submit', onLogin);
document.getElementById('load-data').addEventListener('click', loadData);

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    // const email = formData.get('email');
    // const password = formData.get('password');
    // const repass = formData.get('repass');
    const { email, password, repass } = Object.fromEntries(formData.entries());

    //правим валидация на полетата
    if (email === '' || password === '' || repass === '') {
        return alert('All fileds must be filled!');
    }
    if (password !== repass) {
        return alert('Password must match');
    }

    const url = 'http://localhost:3030/users/register';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify({ email, password })
    };
    //правим трай/кеч, защото имаме комуникация с външен източник
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {

            const error = await response.json();
            throw error;
        }

        const userData = await response.json();
        //така взимаме токена (userData.accessToken);

        localStorage.setItem('email', userData.email);
        localStorage.setItem('accessToken', userData.accessToken);

        location = '../../Lab/Demo With Form'; //ще ни върне на основната страничКА

    } catch (error) { //ще хване нетуърк грешки
        alert(error.message);
    }
}

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password } = Object.fromEntries(formData.entries());

    //при логин може и да НЕ правим валидация на полетата

    const url = 'http://localhost:3030/users/login';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify({ email, password })
    };
    //правим трай/кеч, защото имаме комуникация с въбшен инзточник
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {

            const error = await response.json();
            throw error;
        }

        const userData = await response.json();
        //така взимаме токена (userData.accessToken);
        localStorage.setItem('email', userData.email);
        localStorage.setItem('accessToken', userData.accessToken);

        location = '../../Lab/Demo With Form';

    } catch (error) { //ще хване нетуърк грешки
        alert(error.message);
    }
}

async function loadData() {

    const token = localStorage.getItem('accessToken');
    if (token == null) {
        return alert('You are not logged in!');
    }

    const url = 'http://localhost:3030/data/recipes';
    const options = {
        method: 'get',
        headers: { 'X-Authorization': token },
        // за да не хардкодваме токена, сетваме го през localStorige от регистрацията
    };

    try {
        const response = await fetch(url, options);
        if (response.ok == false) {

            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        console.log(data);

    } catch (error) { //ще хване нетуърк грешки
        alert(error.message);
    }
}