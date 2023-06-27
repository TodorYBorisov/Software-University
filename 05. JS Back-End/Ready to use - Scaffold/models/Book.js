const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required!'],
		minLength: [2, 'The Title should be at least 2 characters!'],

		//match: [patternUser, 'Username should consist english letters and digits only. Plese try again']
	},
	author: {
		type: String,
		required: [true, 'Author is required!'],
		minLength: [5, 'The Author should be at least 5 characters!'],

		//match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Image should start with http:// or https://'],
	},
	review: {
		type: String,
		required: [true, 'Review is required!'],
		minLength: [10, 'The Review should be a minimum of 10 characters long!'],
	},
	genre: {
		type: String,
		required: [true, 'Genre is required!'],
		minLength: [3, 'The Genre should be at least 3 characters!'],
	},
	stars: {
		type: Number,
		required: [true, 'Stars is required!'],
		min: [1, 'The Stars should be a positive number between 1 and 5!'],
		max: [5, 'The Stars should be a positive number between 1 and 5!'],
	},
	platform: {
		type: String,
		require: true,
		enum: {
			values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
			message: '{VALUE} is not supported!',
		}
	},
	price: {
		type: Number,
		required: [true, 'Price is required!'],
		min: [0, 'The Price should be a positive number.'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		minLength: [10, 'The Description should be a minimum of 10 characters long.!'],
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
		//Owner - object Id (a reference to the User model)
	},
	wishingList: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
		//WishingList – a collection of Users (a reference to the User model)
	},

	// gender: {
	// 	type: String,
	// 	required: true,
	// 	enum: {
	// 		values: ['male', 'female'],
	// 		message: '{VALUE} is not supported!',
	// 	}
	// },

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;




