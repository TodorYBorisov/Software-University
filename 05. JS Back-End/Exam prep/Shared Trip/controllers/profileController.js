const { hasUser } = require('../middlewares/guards');
const { userPreference } = require('../services/bookService');

const profileController = require('express').Router(); // Правим си самия контролер

profileController.get('/', hasUser(), async (req, res) => {

    const wishingList = await userPreference(req.user._id);

    res.render('profile', {
        title: 'Profile Page',
        user: Object.assign({ wishingList }, req.user)
    });
});


module.exports = profileController;