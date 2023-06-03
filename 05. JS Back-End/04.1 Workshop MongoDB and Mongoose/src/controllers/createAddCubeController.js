const express = require('express');
const router = express.Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');

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

router.get('/details/:id', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean(); //взимаме id на един куб през мениджъра и го обръщаме с помоща на lean в plain object

    if (!cube) { // ако нямаме cube с това id, ни върни 404
        return res.redirect('/404');
    }

    res.render('details', { cube }); //тук деструкторираме с ... , за да може да се появят данните в детайлите, или там просто пишем cube.name... cube. пред всяко пропърти
});

router.get('/attach-accessory/:id', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean();

    const accessories = await accessoryManager.getAll().lean();

    //тук си подготвяме view данните за да ги ползваме като условие при if и ги подаваме на render
    const hasAccessories = accessories.length > 0;

    res.render('accessory/attach', { cube, accessories, hasAccessories });

});

router.post('/attach-accessory/:id', async (req, res) => {

    const { accessory } = req.body;//това го виждаме от ид на формата как се казва accessory id през формата
    const id = req.params.id;//взимаме id

    await cubeManager.attachAccessory(id, accessory);

    res.redirect(`/cubes/details/${id}`);

});
module.exports = router;