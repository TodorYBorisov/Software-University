document.getElementById('user').style.display = 'none';

document.getElementById('register-form').addEventListener('submit', onRegister);
let notification = document.querySelector('.notification');

async function onRegister(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const { email, password, rePass } = Object.fromEntries(formData.entries());

    if (email === '' || password === '' || rePass === '') {
        notification.textContent = 'All fileds must be filled!';
        return alert('No empty fields allowed!');
    }
    if (password !== rePass) {
        notification.textContent = 'Password must match!';
        return alert('Invalid password,try again!');
    }

    const url = 'http://localhost:3030/users/register';

    const options = {
        method: 'post',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({ email, password, rePass })
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
        //window.location = 'index.html';
    } catch (error) {
        document.getElementById('register-form').reset();
        alert(error.message);
    }
}