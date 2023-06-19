const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		minLength: [10, 'Email must be at least 10 characters long!'],
	},
	hashedPassword: {
		type: String,
		required: [true, 'Password is required'],
		minLength: [4, 'Password must be at least 4 characters long!']
	},

});

const User = mongoose.model('User', userSchema);

module.exports = User;