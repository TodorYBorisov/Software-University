
const { getLastThree } = require('../services/animalService');
const { parseError } = require('../util/parser');

const homeController = require('express').Router();

homeController.get('/', async (req, res) => {
    try {
        const animals = await getLastThree();
        res.render('home', {
            title: 'Home Page',
            animals,
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