const express = require('express');
const router = express.Router();

const cubeManager = require('../managers/cubeManager');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {

    //деструкторираме данните от бодито на формата
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel)
    });

    res.redirect('/'); // след като сме постнали данните редиректваме към home page
});

router.get('/details/:id', (req, res) => {

    const cube = cubeManager.getOne(req.params.id); //взимаме id на един куб през мениджъра

    if (!cube) { // ако пък нямаме куб с това id, ни върни 404, защото find може да върне undefined
        return res.redirect('/404');
    }

    res.render('details', { ...cube }); //тук деструкторираме с ... , за да може да се появят данните в детайлите
});


module.exports = router;