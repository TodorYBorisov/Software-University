const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');
const createAddCubeController = require('../controllers/createAddCubeController');

router.use(homeController);
router.use('/cubes', createAddCubeController); //тук си добавихме /cubes, трябва да се оправи пътя и в main layout

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;