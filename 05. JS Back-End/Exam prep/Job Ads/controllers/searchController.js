const { hasUser } = require('../middlewares/guards');
const { search } = require('../services/adService'); //ТУК  да проверя дали го зарежда от правилното място сега идва от bookService
const { parseError } = require('../util/parser');

const searchController = require('express').Router(); 

searchController.get('/', hasUser(), async (req, res) => {
    try {
        const ads = await search(req.query.search);
        
        ads.headline = ads.map(e => e.headline).join('\n');
        ads.company = ads.map(e => e.company).join('\n');

        res.render('search', {
            title: 'Search Page',
            query: req.query.search,
            ads
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