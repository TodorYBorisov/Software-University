const mongoose = require('mongoose');

const pattern = /^https?:\/\/.+$/gi;
const hotelSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Name is required!'],
        minLength: [4, 'The name should be at least 4 characters'],
        //unique: true
    },
    city: {
        type: String,
        required: [true, 'City is required!'],
        minLength: [3, 'The city should be at least 3 characters long']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        match: [pattern, 'The imageUrl should starts with http or https']
    },
    rooms: {
        type: Number,
        required: true,
        min: [1, 'The number of free rooms should be between 1 and 100'],
        max: [100, 'The number of free rooms should be between 1 and 100']
    },
    bookings: {
        type: [mongoose.Types.ObjectId],
        ref: 'User',
        default: []
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

//hotelSchema.index({ name: 1 }, { collation: { locale: 'en', strength: 2 } });

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;

// review: {
//     type: String,
//     required: [true, 'Review is required!'],
//     minLength: [10, 'The Review should be a minimum of 10 characters long']
// },
// genre: {
//     type: String,
//     required: [true, 'Genre is required!'],
//     minLength: [3, 'The Genre should be at least 3 characters']
// },