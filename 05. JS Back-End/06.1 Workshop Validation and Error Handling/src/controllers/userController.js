const router = require('express').Router();
const { isGuest, hasUser } = require('../middlewares/routGuards');
const { errorHandler } = require('../util/errorHandler');
const { register,login } = require('../managers/userManager');

//////////////////////////////// REGISTER ////////////////////////////////
router.get('/register', isGuest(), (req, res) => {
    res.render('users/register', { title: 'Register' });
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
        res.render('users/register', {errors: errorHandler(error).message});
    }
});



router.get('/login', isGuest(), (req, res) => {

    res.render('users/login', { title: 'Login' });

});

router.post('/login', isGuest(), async (req, res) => {
    const { username, password} = req.body;
    
    try {
        if (username == '' || password == ''){
            throw new Error('All fields are required !');
        }

		const token = await login(username, password);

		res.cookie('token', token, {httpOnly: true});
		res.redirect('/');  // ПРОВЕРИ НАКЪДЕ ТРЯБВА ДА СЕ РЕДИРЕКТНЕ СЛЕД УСПЕШЕН Login
	} catch (error) {
            res.render('users/login', {errors: errorHandler(error).message});
    }
});


router.get('/logout', hasUser(), (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});


module.exports = router;