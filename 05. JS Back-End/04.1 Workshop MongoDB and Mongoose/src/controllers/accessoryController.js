// const express = require('express');
// const router = express.Router();

//това е същото като горното само че на един ред разписано
const router =require('express').Router();

router.get('/create', (req, res) => {

    res.render('accessory/create');

});



module.exports = router;