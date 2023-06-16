const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, 'Username is required'],
		minLength: [4, 'Username must be at least 4 characters long!'],
	},
	address: {
		type: String,
		required: [true, 'Address is required'],
		maxLength: [20, 'Email must be at least 20 characters long!'],
	},
	hashedPassword: {
		type: String,
		required: true,
		minLength: [3, 'Password must be at least 3 characters long!'],
	},
	myPublications: {
		type: [mongoose.Types.ObjectId],
		ref: 'Publication',
		default: []
	},
});

const User = mongoose.model('User', userSchema);

module.exports = User;


