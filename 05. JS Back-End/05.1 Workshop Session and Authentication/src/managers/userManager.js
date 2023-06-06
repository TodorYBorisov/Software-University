const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
// Изпълнява се в терминала и генерира 64 bit ASCII string
const sectret='82a51089f3448419bcf30d4803a0a2cdd296558eb7021b6db190f906d230b4f7';

async function register(username, password) {
	const existingUsername = await User.findOne({ username }); // Проверяваме по username, дали вече има такъв
	if (existingUsername) {                                    // Ако намерим съвпадение
		throw new Error('Username or email already exists!'); // Хвърляме грешка
	}

	// const existingEmail = await User.findOne({ email }); // Проверяваме по email, дали вече има такъв
	// if (existingEmail) {                                    // Ако намерим съвпадение
	// 	throw new Error('Username or email already exists !'); // Хвърляме грешка
	// }

	if (password.length < 4) {                      // Ако намерим съвпадение
		throw new Error('Password is too short!'); // Хвърляме грешка
	}

	const hashedPassword = await bcrypt.hash(password, 10); // Хешираме паролата, като подаваме паролата във вида подадена от потребителя и я осоляваме 10 пъти

	const user = await User.create({                        // Създаваме потребителя в базата данни с username и хеширана парола 
		username,
		hashedPassword,
	});

	return createSession(user);                             // Създаваме сесия на потребителя
}











function createSession({ _id, username, hashedPassword }) {
	const payload = {                                                       // Това са данните, които искаме да запазим в токена
		_id,
		username,
		hashedPassword,
	};

	return jwt.sign(payload, sectret);                                   // Връщаме подписан токена като се дават записани данни и тайната 
}

function verifyToken(token) {
    return jwt.verify(token, sectret);
}

module.exports = {
	register,
    //login,
	verifyToken,
	
};