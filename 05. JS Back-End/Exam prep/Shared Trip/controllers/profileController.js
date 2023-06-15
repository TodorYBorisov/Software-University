const { hasUser } = require('../middlewares/guards');
const { userTrips } = require('../services/tripService');

const profileController = require('express').Router(); // Правим си самия контролер

profileController.get('/', hasUser(), async (req, res) => {

    const userAllTrips = await userTrips(req.user._id);

    userAllTrips.tripCount = userAllTrips.length;
    
    res.render('profile', {
        title: 'Profile Page',
        userAllTrips,
    });
});


module.exports = profileController;