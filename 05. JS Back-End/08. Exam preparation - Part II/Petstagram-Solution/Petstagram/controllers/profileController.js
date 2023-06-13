const profileController = require('express').Router();
const { userCookieName } = require('../config/environment.js');
const { getUser, getUserPhotos } = require('../services/dataService.js');
const { errorHandler } = require('../util/errorHandler.js');

// profileController.get('/', async (req, res) => {
//     const userId = res[userCookieName]._id;
//     res.redirect(`/profile/${userId}`);
// });

profileController.get('/:id', async (req, res) => {
    const userId = req.params.id;
    try {
        const [userInfo, userPhotos] = await Promise.all([
            getUser(userId).lean(),
            getUserPhotos(userId),
        ]);

        userInfo.countPhotos = userPhotos.length;
        res.render('profile', {
            userInfo,
            userPhotos,
            title: 'Petstagram',
        });
    } catch (error) {
        console.error(errorHandler(error).message);
        res.redirect('404');
    }
});

module.exports = { profileController };