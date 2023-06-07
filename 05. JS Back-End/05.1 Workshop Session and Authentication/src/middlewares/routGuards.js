function hasUser() {
	return (req, res, next) => {
		if (req.user) {
			next();
		} else {
			res.redirect('/404');	// Проверяваме накъде се редиректва според заданието в секцията за guards
		}
	};
}

function isGuest() {
	return (req, res, next) => {
		if (req.user) {
			res.redirect('/404');  // Проверяваме накъде се редиректва според заданието в секцията за guards
		} else {
			next();
		}
	};
}

module.exports = {
	hasUser,
	isGuest,
};

// function isAuth() {
// 	return (req, res, next) =>{
// 		if(!req.user){
// 			res.redirect('/users/login');
// 		}else{
// 			next();
// 		}
// 	};
// }

exports.isAuth = (req, res, next) => {
	if (!req.user) {
		return res.redirect('/users/login');
	}
	next();
};