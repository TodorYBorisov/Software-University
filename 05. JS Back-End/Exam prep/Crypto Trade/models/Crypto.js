const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const cryptoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
		minLength: [2, 'The name should be at least 2 characters!'],
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Crypto image should start with http:// or https://.'],
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
	payment: {
		type: String,
		require: true,
		enum: {
			values: ['CryptoWallet', 'CreditCard', 'DebitCard', 'PayPal'],
			message: '{VALUE} is not supported!',
		}
	},
	owner: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
		//Owner - object Id (a reference to the User model)
	},
	buyACrypto: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
		//a collection of Users (a reference to the User model)
	},

});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;