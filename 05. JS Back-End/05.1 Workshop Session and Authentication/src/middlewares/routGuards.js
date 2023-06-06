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
