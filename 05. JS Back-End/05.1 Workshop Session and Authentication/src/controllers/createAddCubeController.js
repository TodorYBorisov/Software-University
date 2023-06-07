const express = require('express');
const router = express.Router();

const cubeManager = require('../managers/cubeManager');
const accessoryManager = require('../managers/accessoryManager');
const { route } = require('./userController');
const { hasUser } = require('../middlewares/routGuards');
const { getDifficultyLevelViewData } = require('../util/viewHelpers');

router.get('/create', (req, res) => {
    console.log(req.user);
    res.render('create');
});

router.post('/create', async (req, res) => {

    //деструкторираме данните от бодито на формата
    const { name, description, imageUrl, difficultyLevel } = req.body;

    await cubeManager.create({
        name,
        description,
        imageUrl,
        difficultyLevel: Number(difficultyLevel),
        owner: req.user._id
    });

    res.redirect('/'); // след като сме постнали данните редиректваме към home page
});

router.get('/details/:id', async (req, res) => {

    const cube = await cubeManager.getOneWithAccessories(req.params.id).lean(); //взимаме id на един куб през мениджъра и го обръщаме с помоща на lean в plain object

    if (!cube) { // ако нямаме cube с това id, ни върни 404
        return res.redirect('/404');
    }
    const isOwner = cube.owner?.toString() === req.user?._id;

    res.render('details', { cube, isOwner }); //тук деструкторираме с ... , за да може да се появят данните в детайлите, или там просто пишем cube.name... cube. пред всяко пропърти
});

router.get('/attach-accessory/:id', async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean();
    //const accessories = await accessoryManager.getAll().lean();

    //така му казваме вземи тия аксесоари които ни остава в падащото меню
    const accessories = await accessoryManager.getRest(cube.accessories).lean();

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
///////////////////////////// DELETE /////////////////////////////////
router.get('/delete/:id', hasUser(), async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean();

    const options = getDifficultyLevelViewData(cube.difficultyLevel);

    res.render('deleteCube', { cube, options, title: 'Delete' });
});

router.post('/delete/:id', hasUser(), async (req, res) => {

    const cube = await cubeManager.delete(req.params.id);

    res.redirect('/');
});



/////////////////////////// EDIT /////////////////////
router.get('/edit/:id', hasUser(), async (req, res) => {

    const cube = await cubeManager.getOne(req.params.id).lean();

    if (cube.owner.toString() !== req.user?._id) {
        return res.redirect('/404');
    }

    const options = getDifficultyLevelViewData(cube.difficultyLevel);

    res.render('editCube', { cube, options, title: 'Edit' });
});

router.post('/edit/:id', hasUser(), async (req, res) => {

    const cubeData = req.body; //тук взимаме данните от формата и ги подаваме за ъпдейт

    await cubeManager.update(req.params.id, cubeData);

    res.redirect(`/cubes/details/${req.params.id}`);
});


module.exports = router;