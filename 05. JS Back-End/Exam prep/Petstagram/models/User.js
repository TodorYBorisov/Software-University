const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gi;
const patternUser = /^[A-Za-z0-9]+$/i;
const patternName = /^[a-zA-Z]+ [a-zA-Z]+$/i;

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Username is required'],
		minLength: [2, 'Username must be at least 2 characters long!'],
	},
	email: {
		type: String,
		required: [true, 'Email is required'],
		minLength: [10, 'Email must be at least 10 characters long!'],
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [4, 'Password must be at least 4 characters long!'],

	},
});


const User = mongoose.model('User', userSchema);

module.exports = User;