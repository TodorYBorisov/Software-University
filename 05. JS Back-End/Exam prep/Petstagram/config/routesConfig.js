const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
//============================================================//
const photoController = require('../controllers/photoController');
const profileController = require('../controllers/profileController');



module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/pets', photoController); // да си добавя актуалните контролери
    app.use('/profile', profileController); // да си добавя актуалните контролери
 


    app.all('*', (req, res) => {
        res.render('404', {title: 'Page Not Found'});
    });

};