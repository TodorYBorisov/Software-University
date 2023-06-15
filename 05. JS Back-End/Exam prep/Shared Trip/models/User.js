const mongoose = require('mongoose');

//ТУК ДА СЕ ДОБАВЯТ СВОИСТВАТА КЪМ МОДЕЛА И ДА СЕ ВАЛИДИРАТ
const patternEmail = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/gi;
const patternUser = /^[A-Za-z0-9]+$/gi;

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [4, 'Password must be at least 4 characters long!'],

	},
	gender: {
		type: String,
		required: true,
		enum: {
			values: ['male', 'female'],
			message: '{VALUE} is not supported!',
		}
	},
	tripsHistory: {
		type: [mongoose.Types.ObjectId],
		ref: 'Trip',
		default: [], //НОВО
		
	},
});

// userSchema.pre('save', function () {
//     if (['male', 'female'].includes(this.gender) == false) {
//         throw new Error('Gender is incorrect');
//     }
//     return this.gender = this.gender === 'male' ? 'Male' : 'Female';
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
