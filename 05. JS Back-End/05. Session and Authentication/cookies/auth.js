const express = require('express');
const session = require('express-session');
const { registerUser, loginUser, users } = require('./userServise');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(session({
    cookie: { secure: false },
    resave: false,
    saveUninitialized: true,
    secret: 'ksjefirnvoenrvsfveoijreio'
}));

app.get('/', (req, res) => {

    //console.log('>>>User: ' + (req.session.user) || 'guest');

    // if (req.session.user) {
    //     res.send(`<p> Hello, ${req.session.user}</p>`);
    // } else {
    //     res.send('<p>Hello, guest</p> <p>Please <a> href="/login">Login here</a>');
    // }
    res.send(homeTemplate(req.session.user, users));

});

const homeTemplate = (loginUser, users) => `<h1>Welcome, ${loginUser || 'guest'}</h1>
${loginUser == undefined ? '<p>Please <a href="/login">Login here</a>. If you don\'t have an account, <a href="/register">Please register </a>.'  : ''}
<ul>
${users.map(u => `<li>${u.username}</li>`).join('\n')}
</ul>
`;

const registerTemplate = (error) => `${error ? `<p>${error}</p>` : ''}
<h1>Register</h1>
<form action="/register" method="post">
    <label for="">Username: <input type="text" name="username"></label>
    <label for="">Password: <input type="password" name="password"></label>
    <label for="">Repeat: <input type="password" name="repass"></label>
    <input type="submit" name="" id="" value="Sign up">
</form>`;

app.get('/register', (req, res) => {
    res.send(registerTemplate());
});

//сега ще обработим поста при регистрация
app.post('/register', async (req, res) => {

    try {
        if (req.body.username == '' || req.body.password == '' || req.body.repass == '') {
            throw new Error('All fields are required!');

        } else if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match! Please try againg');
        }

        await registerUser(req.body.username, req.body.password);
        res.redirect('/');

    } catch (error) {
        res.send(registerTemplate(error.message));
    }


});

app.get('/login', (req, res) => {
    res.send(`<h1>Login</h1>
    <form action="/login" method="post">
        <label for="">Username: <input type="text" name="username"></label>
        <label for="">Password: <input type="password" name="password"></label>
        <input type="submit" name="" id="" value="Login">
    </form>`);
});

app.post('/login', async (req, res) => {

    if (await loginUser(req.body.username, req.body.password)) {
        req.session.user = req.body.username; // тук сетваме сесията
        res.redirect('/');

    } else {
        res.status(401).send('Incorrect username or password');
    }

});

app.listen(3000);




