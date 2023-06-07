const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		minLength: [5, 'Username must be at least 5 characters long !'],
	},
	// email: {
	// 	type: String,
	// 	required: true,
	// 	minLength: [5, 'Email must be at least 10 characters long !'],
	// },
	hashedPassword: {
		type: String,
		required: true,
	},
});

//условие ако искаме username да е уникален, unique:true се добавя при username
//userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });

const User = mongoose.model('User', userSchema);

module.exports = User;