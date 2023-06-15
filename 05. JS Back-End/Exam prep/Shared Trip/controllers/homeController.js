const { getAll } = require('../services/tripService');
const { parseError } = require('../util/parser');

const homeController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!
homeController.get('/', (req, res) => {
	res.render('home', {
        title: 'Home Page',
        user: req.user
	});
});

module.exports = homeController;


