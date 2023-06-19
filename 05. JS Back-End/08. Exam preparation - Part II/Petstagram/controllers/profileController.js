const { hasUser } = require('../middlewares/guards');
const { userCreatedItems } = require('../services/photoService');
const { parseError } = require('../util/parser');

const profileController = require('express').Router(); // Правим си самия контролер

profileController.get('/', hasUser(), async (req, res) => {
    try {

        const createdPhotos = await userCreatedItems(req.user._id);

        createdPhotos.count = createdPhotos.length;
        
        res.render('profile', {
            title: 'Profile Page',
            createdPhotos
        });
    } catch (error) {
         res.render('404', {
            errors: parseError(error),
            title: 'Profile Page'
        });
    }

});

module.exports = profileController;