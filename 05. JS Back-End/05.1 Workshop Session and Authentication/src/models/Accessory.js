const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        //maxLength: 10
    },
    imageUrl: {
        type: String,
        require: true,
    }


});

const Accessory = mongoose.model('Accessory', accessorySchema);

module.exports = Accessory;