const express = require('express');
const path =require ('path');

//добавяме мидълуеър за статичните файлове
//ако не разпонзва пътя, добавяме path с require & Пишем app.use(express.static(path.resolve(__dirname,"public"))
//app.use(express.static('src/public'));
//добавяме urlencoded за да може да взимаме данните от форма, идват като обект през req.body

function expressConfigurator(app) {
    app.use(express.static(path.resolve(__dirname,'../public')));
    app.use(express.urlencoded({ extended: false }));
};

module.exports = expressConfigurator;