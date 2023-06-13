const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        minLength: [2, 'Title must be at least 2 characters long'],
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: (value) => /^https?:\/\//gi.test(value),
            message: 'Image URL must start with http:// or https://'
        }
    },
    age: {
        type: Number,
        required: true,
        min: [1, 'Price must be between 1 and 100'],
        max: [100, 'Price must be between a and 100'],
    },
    description: {
        type: String,
        required: true,
        minLength: [5, 'Description must be at least 5 characters long'],
        maxLength: [50, 'Description must be a maximum of 50 characters long']
    },
    location: {
        type: String,
        required: true,
        minLength: [5, 'Location must be at least 5 characters long'],
        maxLength: [50, 'Location must be a maximum of 50 characters long']
    },
    commentList: [{
        userID: {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        },
        comment: String,
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    }
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = { Photo };