
const { getFirstThree } = require('../services/adService');
const { parseError } = require('../util/parser');

const homeController = require('express').Router(); // Правим си самия контролер

homeController.get('/', async (req, res) => {
    try {
        const allJobs = await getFirstThree();
        res.render('home', {
            title: 'Home Page',
            allJobs
        });
    } catch (error) {
        res.render('home', {
            title: 'Home Page',
            errors: parseError(error),
        });
    }
});

module.exports = homeController;
