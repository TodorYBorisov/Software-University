const { hasUser } = require('../middlewares/guards');
const { search } = require('../services/gameService');
const { parseError } = require('../util/parser');

const searchController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!
searchController.get('/', hasUser(), async (req, res) => {
    try {
        const games = await search(req.query.name, req.query.platform);

        res.render('search', {
            title: 'Search Page',
            user: req.user,
            games
        });
    } catch (error) {
        res.render('404', {
            errors: parseError(error),
        });
    }

});

module.exports = searchController;
