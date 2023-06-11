const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
// const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gi;
// const patternUser = /^[A-Za-z0-9]+$/gi;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		//unique: true,
		//match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
		minLength: [10, 'Email must be at least 10 characters long!'],
	},
	username: {
		type: String,
		required: true,
		unique: true,
		//match: [patternUser, 'Username should consist english letters and digits only. Plese try again']
		minLength: [5, 'Username must be at least 5 characters long!'],
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [4, 'Password must be at least 4 characters long!'],

	},
});
// userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });
// userSchema.index({ email: 1 }, { collation: { locale: 'en', strength: 2 } });

//условие ако искаме username да е уникален, unique:true се добавя при username
//userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });

const User = mongoose.model('User', userSchema);

module.exports = User;