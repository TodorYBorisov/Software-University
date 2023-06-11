const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
//============================================================//
const gameController = require('../controllers/gameController');
//const profileController = require('../controllers/profileController');
const searchController = require('../controllers/searchController');



module.exports = (app) => {

    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/games', gameController); // да си добавя актуалните контролери
    //app.use('/profile', profileController); // да си добавя актуалните контролери
    app.use('/search', searchController);


    app.all('*', (req, res) => {
        res.render('404');
    });

};