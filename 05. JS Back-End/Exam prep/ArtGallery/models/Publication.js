const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const publicationSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required!'],
		minLength: [6, 'The Title should be at least 6 characters!'],
	},
	technique: {
		type: String,
		required: [true, 'Technique is required!'],
		maxLength: [15, 'The Painting technique should be a maximum of 15 characters long!'],
	},
	imageUrl: {
		type: String,
		required: [true, 'Art picture is required!'],
		match: [pattern, 'The Art picture should start with http:// or https://.'],
	},
	certificate: {
		type: String,
		required: [true, 'Certificate is required!'],
		enum: {
			values: ['Yes', 'No'],
			message: '{VALUE} is not supported!',
		}
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'User'
	},
	shared: {
		type: [mongoose.Types.ObjectId],
		ref: 'User'
	},
});

const Publication = mongoose.model('Publication', publicationSchema);

module.exports = Publication;