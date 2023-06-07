const { verifyToken } = require('../managers/userManager');

module.exports = () => (req, res, next) => {
	const token = req.cookies.token;

	if (token) {
		try {
			const userData = verifyToken(token);
            req.user = userData;
			res.locals.username = userData.username;
			res.locals.email = userData.email;
		} catch (error) {
            res.clearCookie('token');
            //res.redirect('/404'); //тук редиректваме ако токена е невалиден
			res.redirect('/users/login');
            return;
        }
	}

	next();
};
