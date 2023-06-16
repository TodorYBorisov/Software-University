const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
//============================================================//
const publicationController = require('../controllers/publicationController');
const profileController = require('../controllers/profileController');



module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/publications', publicationController); // да си добавя актуалните контролери
    app.use('/profile', profileController); // да си добавя актуалните контролери
    

    app.all('*', (req, res) => {
        res.render('404', {title: 'Page Not Found'});
    });

};