const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gi;
const patternUser = /^[A-Za-z0-9]+$/i;
const patternName = /^[a-zA-Z]+ [a-zA-Z]+$/i;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true,
		match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
		//minLength: [5, 'Email must be at least 10 characters long !'],
	},
	name: {
		type: String,
		required: [true, 'Name is required'],
		match: [patternName, 'The name should be in the following format -> (firstname lastname)']
		//minLength: [5, 'Email must be at least 10 characters long !'],
	},

	username: {
		type: String,
		required: [true, 'Username is required'],
		unique: true,
		match: [patternUser, 'Username should consist english letters and digits only. Plese try again']
		//minLength: [5, 'Username must be at least 5 characters long !'],
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [5, 'Password must be at least 5 characters long!'],

	},
	tripsHistory: {
		type: [mongoose.Types.ObjectId],
		ref: 'Trip',
		default: [], //НОВО
		
	},
});
userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });
userSchema.index({ email: 1 }, { collation: { locale: 'en', strength: 2 } });

//условие ако искаме username да е уникален, unique:true се добавя при username
//userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });

// userSchema.pre('save', function () {
//     if (['male', 'female'].includes(this.gender) == false) {
//         throw new Error('Gender is incorrect');
//     }
//     return this.gender = this.gender === 'male' ? 'Male' : 'Female';
// });

const User = mongoose.model('User', userSchema);

module.exports = User;