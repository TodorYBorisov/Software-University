const { getLastThree } = require('../services/estateService');
const { parseError } = require('../util/parser');

const homeController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!
homeController.get('/', async (req, res) => {
    try {
        const estates = await getLastThree();
        res.render('home', {
            title: 'Home Page',
            estates,
            user: req.user
        });
    } catch (error) {
        res.render('home', {
            title: 'Home Page',
            errors: parseError(error),
        });
    }
});


module.exports = homeController;

//ако трябва да рендим нещо в хоума директно слагаш това само провери функцията
// try {
//         const estates = await getLastThree()
//         res.render('home', {
//                 title: 'Home Page',
//                 estates
//         });
// } catch (error) {
//         res.render('home', {
//                 title: 'Home Page',
//                 errors: parseError(error),
//         });
// }