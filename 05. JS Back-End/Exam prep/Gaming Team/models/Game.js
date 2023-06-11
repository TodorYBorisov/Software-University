const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const gameSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
		minLength: [4, 'The name should be at least four characters!'],

		//match: [patternUser, 'Username should consist english letters and digits only. Plese try again']
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Image should start with http:// or https://'],
	},
	price: {
		type: Number,
		required: [true, 'Price is required!'],
		min: [0, 'The price should be a positive number!'],
		//max: [5, 'The Stars should be a positive number between 1 and 5!'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		minLength: [10, 'The description should be at least ten characters long!'],
	},
	genre: {
		type: String,
		required: [true, 'Genre is required!'],
		minLength: [2, 'The genre should be at least two characters long!'],
	},
	platform: {
		type: String,
		require: true,
		enum: {
			values: ['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX'],
			message: '{VALUE} is not supported!', 
		}
	},
	// author: {
	// 	type: String,
	// 	required: [true, 'Author is required!'],
	// 	minLength: [5, 'The Author should be at least 5 characters!'],

	// 	//match: [patternEmail, 'Email should consist english letters and digits only. Plese try again']
	// },
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
		//Owner - object Id (a reference to the User model)
	},
	boughtBy: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
		//WishingList – a collection of Users (a reference to the User model)
	},

});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;






