const homeController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!
homeController.get('/', (req, res) => {
	res.render('home', {
        title: 'Home Page',
        user: req.user
	});
});

module.exports = homeController;