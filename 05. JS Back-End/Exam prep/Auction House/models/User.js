const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gi;
//const patternUser = /^[A-Za-z0-9]+$/gi;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
		//minLength: [10, 'Email must be at least 10 characters long !'],
	},
	firstName: {
		type: String,
		required: true,
		minLength: [1, 'Firstname must be at least 1 characters long!'],
	},
	lastName: {
		type: String,
		required: true,
		minLength: [1, 'Lasttname must be at least 1 characters long!'],
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [5, 'Password must be at least 5 characters long!'],
	}
});


const User = mongoose.model('User', userSchema);

module.exports = User;