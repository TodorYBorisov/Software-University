const { hasUser } = require('../middlewares/guards');
const { userPreference, userCreatedItems } = require('../services/publicationService');

const profileController = require('express').Router(); // Правим си самия контролер

profileController.get('/', hasUser(), async (req, res) => {

    const sharedPublications = await userPreference(req.user._id);
    const createdPublicaions = await userCreatedItems(req.user._id);

    createdPublicaions.hasCreated = createdPublicaions.length > 0;
    createdPublicaions.titles = createdPublicaions.map(obj => obj.title).join(', ');

    sharedPublications.hasShared = sharedPublications.length>0;
    sharedPublications.titles = sharedPublications.map(obj => obj.title).join(', ');


    console.log(createdPublicaions.titles);

    


    res.render('profile', {
        title: 'Profile Page',
        sharedPublications,
        createdPublicaions
    });
});


module.exports = profileController;