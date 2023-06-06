const router = require('express').Router();
const { isGuest, hasUser } = require('../middlewares/routGuards.js');
const { errorHandler } = require('../util/errorHandler.js');
const { register } = require('../managers/userManager.js');

router.get('/register', (req, res) => {

    res.render('user/register', { title: 'Register' });

});

router.post('/register', isGuest(), async (req, res) => {

    const { username, password, repeatPassword } = req.body;

    try {
        if (username == '' || password == '' || repeatPassword == '') {
            throw new Error('All fields are required !');
        }

        if (password != repeatPassword) {  // В register.hbs repass трябва да е name attribute във формата 
            throw new Error('Passwords do not match !');
        }

        const token = await register(username, password);

        res.cookie('token', token);
        res.redirect('/');  // ПРОВЕРИ НАКЪДЕ ТРЯБВА ДА СЕ РЕДИРЕКТНЕ СЛЕД УСПЕШЕН Register

    } catch (error) {
        res.render('user/register', {errors: errorHandler(error).message});
    }
});

module.exports = router;