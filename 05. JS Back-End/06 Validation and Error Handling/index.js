const express = require('express');
const app = express();

const { urlencoded } = require('express');
const validators = require('./util/validators');
const validator = require('validator');
const { isEmail } = require('./middleware/validatorMiddleware');
const {body} = require('express-validator');

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {

    res.send(`<h1>Hello</h1>
    <p><a href="/login">Login</a></p>
    <p><a href="/register">Register</a></p>
    <p><a href="/profile">Profile</a></p>
    <p><a href="/logout">Logout</a></p>`);

});


app.get('/login', (req, res) => {

    res.send(`<h1>Sign in</h1>
    <form method="post">
        <label for="email">Email</label>
        <input type="text" id="email" name="email">
        <label for="password">Password</label>
        <input type="password" name="password" id="password">
    
        <input type="submit" value="login">
    </form>`);

});

app.post('/login', isEmail, (req, res) => {

    const { email, password } = req.body;


    if (!validator.isStrongPassword(password)){
        return res.redirect('/404');
    }

        res.redirect('/');
});

app.get('/404', (req, res) => {
    res.send('Page not foud');
});

app.listen(3000);
console.log('App is listenig on a port 3000...');