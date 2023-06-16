const { verifyToken } = require('../services/userService');

module.exports = () => (req, res, next) => {
	const token = req.cookies.token;

	if (token) {
		try {
			const userData = verifyToken(token); 
            req.user = userData;

			res.locals.username = userData.username; 
			res.locals.address = userData.address;
			
		} catch (error) {
            res.clearCookie('token');
            res.redirect('/404');
            return;
        }
	}

	next();
};

//1 няма cookie/token
//2 има cookie/token
//3.има невалидно cookie

//С res.locals.username по този начин вкарваме username в глобалния контекст през мидълуера, който темплета ще го чете

// ако искаме да добавим други полета в res.locals трябва да ги подадем в payload в userService