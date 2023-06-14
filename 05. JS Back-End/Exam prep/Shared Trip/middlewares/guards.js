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

function isOwner() {
	return function (req, res, next) {
		const userId = req.session.user?._id;

		//тука data идва от колекцията в базата, трябва да е с нейното име
		if (res.locals.data.owner == userId) {
			next();
		} else {
			res.redirect('/');
		}
	};
}

module.exports = {
	hasUser,
	isGuest,
	isOwner
};
