const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const photoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
		minLength: [2, 'The name should be at least 2 characters!'],
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Image should start with http:// or https://'],
	},
	age: {
		type: Number,
		required: [true, 'Age is required!'],
		min: [1, 'The age should be between 1 and 100.'],
		max: [100, 'The age should be between 1 and 100..'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		minLength: [5, 'The description should be between 5 and 50 characters long!'],
	},
	location: {
		type: String,
		required: [true, 'Location is required!'],
		minLength: [5, 'The location should be between 5 and 50 characters long!'],
	},
	commentList: [{
		userId: {
			type: mongoose.Types.ObjectId,
			ref: 'User'
		},
		comment: String,
	}],
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;