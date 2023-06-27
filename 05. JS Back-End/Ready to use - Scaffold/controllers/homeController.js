
const { getAll } = require('../services/bookService');
const { parseError } = require('../util/parser');

const homeController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!
homeController.get('/', (req, res) => {
//това е при статичен home
	res.render('home', {
        title: 'Home Page',
        user: req.user
	});
});


module.exports = homeController;

//ако трябва да рендим нещо в хоума директно слагаш това само провери функцията
// homeController.get('/', async (req, res) => {
//     try {
//         const allShared = await getAll();
// // allShared идва от модела
//         res.render('home', {
//             title: 'Home Page',
//             allShared
//         });
//     } catch (error) {
//         res.render('home', {
//             title: 'Home Page',
//             errors: parseError(error),
//         });
//     }
// });

// module.exports = homeController;
