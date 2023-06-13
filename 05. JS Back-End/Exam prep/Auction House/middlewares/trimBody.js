module.exports = () => (req, res, next) => {
	if (req.body) {
		for (let key in req.body) {
			req.body[key] = req.body[key].trim();
		}
	}
	next();
};


//ако искаме може да се подаде списък с неща които да не тримва(за да не го прави, се подава стринг в routsConfig в контролера)
// module.exports = (...excludedKeys) => (req, res, next) => {
// 	if (req.body) {
// 		for (let key in req.body) {
// 			if (excludedKeys.includes(key) === false) {
// 				req.body[key] = req.body[key].trim();
// 			}
// 		}
// 	}
// 	next();
// };