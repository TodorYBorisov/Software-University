const express = require('express');
const path =require ('path');

//добавяме мидълуеър за статичните файлове
//ако не разпонзва пътя, добавяме path с require & Пишем app.use(express.static(path.resolve(__dirname,"public"))
//app.use(express.static('src/public'));
//добавяме urlencoded за да може да парсваме данните от някаква форма ако идват под обект с req.body

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname,'../public')));
    app.use(express.urlencoded({ extended: false }));
};

module.exports = expressConfigurator;