const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
//============================================================//
const cryptoController = require('../controllers/cryptoController');
const searchController = require('../controllers/searchController');

module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/cryptos', cryptoController); // да си добавя актуалните контролери
    app.use('/search', searchController); // да си добавя актуалните контролери


    app.all('*', (req, res) => {
        res.render('404');
    });

};