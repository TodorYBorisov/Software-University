const { hasUser } = require('../middlewares/guards');
const { search } = require('../services/animalService'); 
const { parseError } = require('../util/parser');

const searchController = require('express').Router();

searchController.get('/', async (req, res) => {
    try {
        const animals = await search(req.query.search);

        res.render('search', {
            title: 'Search Page',
            animals,
            query: req.query.search,
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