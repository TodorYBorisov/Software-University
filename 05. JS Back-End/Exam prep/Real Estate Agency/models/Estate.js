const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;

const estateSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
		minLength: [6, 'The name should be at least 6 characters!'],
	},
	type: {
		type: String,
		required: [true, 'Taype is required!'],
		enum: {
			values: ['Apartment', 'Villa', 'House'],
			message: '{VALUE} is not supported!',
		}
	},
	year: {
		type: Number,
		required: [true, 'Year is required!'],
		min: [1850, 'The Year should be between 1850 and 2021.'],
		max: [2021, 'The Year should be between 1850 and 2021.'],
	},
	city: {
		type: String,
		required: [true, 'City is required!'],
		minLength: [4, 'The City should be at least 4 characters long!'],
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Home Image should starts with http:// or https://.'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		maxLength: [60, 'The Property Description should be a maximum of 60 characters long!'],
	},
	pieces: {
		type: Number,
		required: [true, 'Pieces is required!'],
		min: [0, 'The Available Pieces should be positive number (from 0 to 10).'],
		max: [10, 'The Available Pieces should be positive number (from 0 to 10).'],
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	rented: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
	},
});

const Estate = mongoose.model('Estate', estateSchema);

module.exports = Estate;







