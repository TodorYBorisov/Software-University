const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const auctionSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required!'],
		minLength: [4, 'The Title should be at least 4 characters!'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		maxLength: [200, 'The description should be a maximum of 200 characters long']
	},
	category: {
		type: String,
		require: true,
		enum: {
			values: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other'],
			message: '{VALUE} is not supported!',
		}
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Image should start with http:// or https://'],
	},
	price: {
		type: Number,
		required: [true, 'Price is required!'],
		min: [0, 'The Price should be a positive number.'],
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	bidder: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
	},
});

const Auction = mongoose.model('Auction', auctionSchema);

module.exports = Auction;