const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minLength: [4, 'The username should be at least 4 characters long!'],
		
		//match: [patternUser, 'Username should consist english letters and digits only. Plese try again']
	},
	email: {
		type: String,
		required: true,
		minLength: [10, 'Email must be at least 10 characters long!'],
		
		//match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [3, 'Password must be at least 3 characters long!'],

	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;



