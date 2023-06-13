const detailsController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getDataById, addComment } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');
const { isLogged } = require('../middleware/guards.js');

detailsController.get('/:id', async (req, res) => {
    const photoId = req.params.id;
    try {
        const photoDetails = await getDataById(photoId).lean();

        console.log(photoDetails);

        if (res[userCookieName]) {
            const userId = res[userCookieName]._id;
            photoDetails.isOwner = userId == photoDetails.owner._id;
            photoDetails.canComment = userId != photoDetails.owner._id;
        }

        res.render('details', {
            photoDetails,
            title: 'Petstagram',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${photoId}`);
    }
});

detailsController.post('/:id', isLogged, async (req, res) => {
    const photoId = req.params.id;
    try {
        const comment = {
            userID: res[userCookieName]._id,
            comment: req.body.comment,
        };
        await addComment(photoId, comment);
        res.redirect(`/details/${photoId}`);
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect(`/details/${photoId}`);
    }
});

module.exports = { detailsController };