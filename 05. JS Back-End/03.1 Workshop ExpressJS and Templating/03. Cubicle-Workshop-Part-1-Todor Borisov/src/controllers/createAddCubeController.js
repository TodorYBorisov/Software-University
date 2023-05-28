const express = require('express');
const router = express.Router();

const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {

    console.log(cubeManager.getAll());
    res.render('create');
});

router.post('/create', (req, res) => {
    
    //деструкторираме данните от бодито на формата
    const { name, description, imageUrl, difficultyLevel } = req.body;

    cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)
    });

    res.redirect('/'); // след като сме постнали данните редиректваме към home page
});


module.exports = router;