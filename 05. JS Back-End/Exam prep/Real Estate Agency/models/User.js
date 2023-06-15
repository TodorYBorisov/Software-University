const mongoose = require('mongoose');

const patternName = /^[a-zA-Z]+ [a-zA-Z]+$/i;

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		match: [patternName, 'The name should be in the following format -> (firstname lastname).']
		//minLength: [5, 'Email must be at least 10 characters long !'],
	},
	username: {
		type: String,
		required: [true, 'Username is required'],
		minLength: [5, 'Username must be at least 5 characters long!'],
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [4, 'Password must be at least 4 characters long!'],
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;

