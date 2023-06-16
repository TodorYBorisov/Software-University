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

module.exports = {
    hasUser,
    isGuest,
};
