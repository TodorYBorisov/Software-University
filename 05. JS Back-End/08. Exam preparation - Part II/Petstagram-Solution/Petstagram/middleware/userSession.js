const jwt = require('jsonwebtoken');
const { jwtSecret, userCookieName } = require('../config/environment.js');

module.exports = (req, res, next) => {
    const token = req.cookies[userCookieName];
    if (token) {
        try {
            const decodedToken = jwt.verify(token, jwtSecret, (err, decodedToken) => {
                if (err) {
                    throw new Error('Invalid token');
                }
                return decodedToken;
            });
            res[userCookieName] = decodedToken;
            res.locals.hasUser = true;
            res.locals.name = decodedToken.username;
            res.locals.userId = decodedToken._id;
        } catch (error) {
            res.clearCookie(userCookieName);
            res.redirect('/user/login');
        }
    }
    next();
};