const { hasUser } = require('../middlewares/guards');
const { searchByUserPreference } = require('../services/hotelService');

const profileController = require('express').Router(); // Правим си самия контролер


profileController.get('/', hasUser(), async (req, res) => {
    const bookings = await searchByUserPreference(req.user._id);


    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign({ bookings }, req.user)
    });
});


module.exports = profileController;