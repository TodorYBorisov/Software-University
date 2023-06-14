const authController = require('express').Router();

const { isGuest, hasUser } = require('../middlewares/guards');
const { register, login } = require('../services/userService');
const { parseError } = require('../util/parser');
const validator = require('validator');

//////////////////////////////// REGISTER ////////////////////////////////

authController.get('/register', isGuest(), (req, res) => {
    res.render('register', { //ТУК ДА СЕ СМЕНИ С АКТУАЛНОТО view от register.hbs
        title: 'Register Page'
    });
});

authController.post('/register', isGuest(), async (req, res) => {
    // const {email, username, password, repass} = req.body 
    console.log(req.body);
    try {

        if (req.body.email == '' || req.body.password == '' || req.body.repass == '') {
            throw new Error('All fields are required!');
        }

        if (req.body.password != req.body.repass) {  // В register.hbs repass трябва да е name attribute във формата 
            throw new Error('Passwords do not match!');
        }

        // if (validator.isEmail(req.body.email) === false) {
        //     throw new Error('Invalid email');
        // }
        if (req.body.password.length < 4) {
            throw new Error('Password must be at least 4 chars!');
        }
        // if (validator.isAlphanumeric(req.body.password) === false) {
        //     throw new Error('Password must contain only English letters and digits.');
        // }

        const token = await register(req.body.email, req.body.password, req.body.gender);
        //ТУК ДА СЕ ПРОВЕРИ ДАЛИ СЛЕД РЕГИСТРАЦИЯ СЕ ВИКА ЛОГИН
        res.cookie('token', token);
        res.redirect('/'); //TУК ДА СЕ ПРОВЕРИ НАКЪДЕ ТРЯБВА ДА СЕ РЕДИРЕКТНЕ СЛЕД УСПЕШЕН Register

    } catch (error) {
        const errors = parseError(error);
        const isMale = req.body.gender == 'male'; //НОВО

        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                email: req.body.email,
                isMale, 
            } 
        });
    }
});

//////////////////////////////// LOGIN ////////////////////////////////

authController.get('/login', isGuest(), (req, res) => {
    res.render('login', { //ТУК ДА СЕ СМЕНИ С АКТУАЛНОТО view
        title: 'Login Page'
    });
});

authController.post('/login', isGuest(), async (req, res) => {
    try {
        if (req.body.email == '' || req.body.password == '') {
            throw new Error('All fields are required !');
        }

        const token = await login(req.body.email, req.body.password);

        res.cookie('token', token);
        res.redirect('/');  //ТУК ДА СЕ ПРОВЕРИ НАКЪДЕ ТРЯБВА ДА СЕ РЕДИРЕКТНЕ СЛЕД УСПЕШЕН Login
    } catch (error) {
        const errors = parseError(error);

        res.render('login', {
            title: 'Login Page',
            errors,
            body: {
                email: req.body.email
            }
        });
    }
});

//////////////////////////////// LOGOUT ////////////////////////////////
authController.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

module.exports = authController;