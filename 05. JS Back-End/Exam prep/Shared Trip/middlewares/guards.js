function hasUser() {
	return (req, res, next) => {
		if (req.user) { //ако имаме потребител
			next();
		} else {
			res.redirect('/auth/login');//ТУК ДА Проверяваме накъде се редиректва според заданието в секцията за guards
		}
	};
}

function isGuest() {
	return (req, res, next) => {
		if (req.user) {
			res.redirect('/');  //ТУК ДА Проверяваме накъде се редиректва според заданието в секцията за guards
		} else {
			next();
		}
	};
}

// function isOwner() {
// 	return function (req, res, next) {
// 		const userId = req.session.user?._id;

// 		//тука ако го ползвам да сменя името на колекцията (trip.creator) колекцията в базата, трябва да е с нейното име
// 		if (res.locals.trip.creator == userId) {
// 			next();
// 		} else {
// 			res.redirect('/auth/login');
// 		}
// 	};
// }

module.exports = {
	hasUser,
	isGuest,
	//isOwner
};
