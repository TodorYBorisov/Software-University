const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const animalSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
		minLength: [2, 'The name should be at least 2 characters!']
	},
	years: {
		type: Number,
		required: [true, 'Years is required!'],
		min: [1, 'The yesrs should be between 1 and 100!'],
		max: [100, 'The yesrs should be between 1 and 100!'],
	},
	kind: {
		type: String,
		required: [true, 'Kind is required!'],
		minLength: [3, 'The kind should be at least 3 characters!'],
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Image should start with http:// or https://'],
	},
	need: {
		type: String,
		required: [true, 'Need is required!'],
		minLength: [3, 'The need should be a minimum of 3 characters long!'],
		maxLength: [20, 'The need should be a maximum of 20 characters long!']
	},
	location: {
		type: String,
		required: [true, 'Location is required!'],
		minLength: [5, 'The location should be a minimum of 5 characters long!'],
		maxLength: [15, 'The location should be a maximum of 15 characters long!']
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		minLength: [5, 'The description should be at least 5 characters!'],
		maxLength: [50, 'The description should be no longer than 50 characters!']
	},
	donations: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},

});

const Animal = mongoose.model('Animal', animalSchema);

module.exports = Animal;