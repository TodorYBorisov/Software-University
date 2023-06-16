const mongoose = require('mongoose');

const adSchema = new mongoose.Schema({
	headline : {
		type: String,
		required: [true, 'Headline is required!'],
		minLength: [4, 'The headline should be a minimum of 4 characters long!'],
	},
	location: {
		type: String,
		required: [true, 'Location is required!'],
		minLength: [8, 'The Location should be a minimum of 8 characters long!'],
	},
	company: {
		type: String,
		required: [true, 'Company name is required!'],
		minLength: [3, 'The Company name should be at least 3 characters!'],
	},
	description: {
		type: String,
		required: [true, 'Company description is required!'],
		maxLength: [40, 'The company description should be a maximum of 40 characters long!'],
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
		
	},
	usersApplied: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
	},
});

const Ad = mongoose.model('Ad', adSchema);

module.exports = Ad;