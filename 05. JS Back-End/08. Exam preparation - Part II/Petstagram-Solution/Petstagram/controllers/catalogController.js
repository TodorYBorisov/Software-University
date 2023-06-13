const catalogController = require('express').Router();
const { getAllData } = require('../services/dataService.js');

catalogController.get('/', async (req, res) => {
    const allData = await getAllData().lean();
    
    res.render('catalog', {
        allData,
        title: 'Petstagram',
    });
});

module.exports = { catalogController }; 