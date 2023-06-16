const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gi;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		match: [patternEmail, 'Invalid email address. Plese try again'],
	},
	skills: {
		type: String,
		require: true,
		maxLength: [40, 'The description of skills should be a maximum of 40 characters long!']
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [5, 'Password must be at least 5 characters long!']
	},
	myAds: {
		type: [mongoose.Types.ObjectId],
		ref: 'Ad',
		default: [], //НОВО
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;