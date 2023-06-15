const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
//============================================================//
const tripController = require('../controllers/tripController');
const profileController = require('../controllers/profileController');
// const searchController = require('../controllers/searchController');



module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/trips', tripController); // да си добавя актуалните контролери
    app.use('/profile', profileController); // да си добавя актуалните контролери
    //app.use('/search', searchController); // да си добавя актуалните контролери


    app.all('*', (req, res) => {
        res.render('404', {title: 'Page Not Found'});
    });

};