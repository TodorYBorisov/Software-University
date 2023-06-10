const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
//============================================================//
const bookController = require('../controllers/bookController');
const profileController = require('../controllers/profileController');


module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/books', bookController);  // да си добавя актуалните контролери
    app.use('/profile', profileController); // да си добавя актуалните контролери


    app.all('*', (req, res) => {
        res.render('404');
    });

};