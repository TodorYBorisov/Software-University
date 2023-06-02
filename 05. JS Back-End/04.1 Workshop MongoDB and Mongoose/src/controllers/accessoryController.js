// const express = require('express');
// const router = express.Router();

//това е същото като горното само че на един ред разписано
const router = require('express').Router();

router.get('/create', (req, res) => {

    res.render('accessory/create');// така директно рендерираме файла от папката

});

router.post('/create', (req, res) => {
    const body = req.body;

    console.log(body);

    res.redirect('/');

});
module.exports = router;