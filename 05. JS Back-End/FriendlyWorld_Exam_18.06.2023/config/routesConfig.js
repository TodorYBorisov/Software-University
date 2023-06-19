const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const animalController = require('../controllers/animalController');
const searchController = require('../controllers/searchController');


module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/animals', animalController);
    app.use('/search', searchController);


    app.all('*', (req, res) => {
        res.render('404', {title: 'Page Not Found'});
    });

};