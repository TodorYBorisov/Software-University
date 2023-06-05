const express = require('express');
const router = express.Router();

const cubeManager = require('../managers/cubeManager');

router.get('/', async (req, res) => {

    const { search, from, to } = req.query;

    // req.params -е за параметрите
    // req.body - за post данните които са пратени от формата и парснати
    // req.query - за куери стринга горе url-a

    const cubes = await cubeManager.getAll(search, from, to); //взимаме всички кубчета от мениджъра и ги подаваме на рендър темплейта

    res.render('index', { cubes, search, from, to }); // тук сме подали search, from, to за да осатват стойностите в полетаа на формата
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/404', (req, res) => {
    res.render('404');
});


module.exports = router;