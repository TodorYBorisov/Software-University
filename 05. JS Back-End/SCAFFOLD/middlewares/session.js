const { verifyToken } = require('../services/userService');

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
            res.redirect('/auth/login');
            return;
        }
	}

	next();
};

//1 няма cookie/token
//2 има cookie/token
//3.има невалидно cookie