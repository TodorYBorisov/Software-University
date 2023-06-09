const { getAll } = require('../services/hotelService');

const homeController = require('express').Router(); // Правим си самия контролер

//ТУК ДА СЕ СМЕНИ С КОНТРОЛЕРА ОТ ЗАДАНИЕТО!!!
homeController.get('/', async (req, res) => {
        const hotels = await getAll(); // правим hotels които се рендят на хоума и ги взимаме от базатаданни

        res.render('home', {
                title: 'Home Page',
                user: req.user,
                hotels
        });
});

module.exports = homeController;