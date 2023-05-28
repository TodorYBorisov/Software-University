const express = require('express');
const router = express.Router();

const cubeManager = require('../managers/cubeManager');

router.get('/', (req, res) => {

    const cubes = cubeManager.getAll(); //взимаме всички кубчета от мениджъра и ги подаваме на рендър темплейта

    res.render('index', { cubes });
});

router.get('/about', (req, res) => {
    res.render('about');
});



module.exports = router;