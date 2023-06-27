const { hasUser } = require('../middlewares/guards');
const { search } = require('../services/bookService'); //ТУК  да проверя дали го зарежда от правилното място сега идва от bookService
const { parseError } = require('../util/parser');

const searchController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!

searchController.get('/', hasUser(), async (req, res) => {
    try {
        const estates = await search(req.query.search);

        res.render('search', {
            title: 'Search Page',
            query: req.query.search,
            estates
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
            title: 'Search Page',
            query: req.query.search,
        });
    }

});

module.exports = searchController;