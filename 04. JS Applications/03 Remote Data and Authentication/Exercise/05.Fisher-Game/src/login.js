document.getElementById('user').style.display = 'none';

document.getElementById('login-form').addEventListener('submit', onLogin);
let notification = document.querySelector('.notification');

async function onLogin(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password } = Object.fromEntries(formData.entries());

    if (email === '' || password === '') {
        notification.textContent = 'All fileds must be filled!';
        return alert('No empy fields allowed!');
    };

    const url = 'http://localhost:3030/users/login';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'applications/json' },
        body: JSON.stringify({ email, password })
    };
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();

        const userData = {
            id: data._id,
            email: data.email,
            token: data.accessToken
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        //const userData =JSON.parse(localStorage.getItem('userData'));//userData след парса вече е обект и може да се достъпва.

        // localStorage.setItem('email', userData.email);
        // localStorage.setItem('accessToken', userData.accessToken);
        // localStorage.setItem('_id', userData._id);

        window.location = ('./index.html');

    } catch (error) {
        document.getElementById('login-form').reset();
        alert(error.message);
    }
}