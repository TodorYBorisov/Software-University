// const express = require('express');
// const router = express.Router();

//това е същото като горното само че на един ред разписано
const router = require('express').Router();
const accessoryManager = require('../managers/accessoryManager');


router.get('/create', (req, res) => {

    res.render('accessory/create');// така директно рендерираме файла от папката

});

router.post('/create', async (req, res) => {

    const { name, description, imageUrl } = req.body;

    await accessoryManager.create({ name, description, imageUrl });

    res.redirect('/');
});

module.exports = router;