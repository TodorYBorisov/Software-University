const authController = require('express').Router();

const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');

//////////////////////////////// REGISTER ////////////////////////////////
authController.get('/register', (req, res) => {
    res.render('register', { //ТУК ДА СЕ СМЕНИ С АКТУАЛНОТО view
        title: 'Register Page'
    });
});

authController.post('/register', async (req, res) => {
    try {

        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required!');
        }
        if (req.body.password != req.body.repass) {  // В register.hbs repass трябва да е name attribute във формата 
            throw new Error('Passwords do not match !');
        }

        const token = await register(req.body.username, req.body.password);
        //ТУК ДА СЕ ПРОВЕРИ ДАЛИ СЛЕД РЕГИСТРАЦИЯ СЕ ВИКА ЛОГИН
        res.cookie('token', token);
        res.redirect('/'); //TУК ДА СЕ ПРОВЕРИ НАКЪДЕ ТРЯБВА ДА СЕ РЕДИРЕКТНЕ СЛЕД УСПЕШЕН Register

    } catch (error) {
        const errors = parseError(error);

        res.render('register', {
            title: 'Register Page',
            errors,
            body: { username: req.body.username }
        });
    }
});

//////////////////////////////// LOGIN ////////////////////////////////

authController.get('/login', (req, res) => {
    res.render('login', { //ТУК ДА СЕ СМЕНИ С АКТУАЛНОТО view
        title: 'Login Page'
    });
});

authController.post('/login', async (req, res) => {
    try {
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required !');
        }

        const token = await login(req.body.username, req.body.password);

        res.cookie('token', token);
        res.redirect('/');  //ТУК ДА СЕ ПРОВЕРИ НАКЪДЕ ТРЯБВА ДА СЕ РЕДИРЕКТНЕ СЛЕД УСПЕШЕН Login
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }
});

//////////////////////////////// LOGOUT ////////////////////////////////
authController.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;