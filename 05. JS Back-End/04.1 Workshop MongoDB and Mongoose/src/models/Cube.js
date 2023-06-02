const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({

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
    },
    difficultyLevel: {
       type: Number,
        require: true
        // min: 1,
        // max: 6,
    },
    //accessories: {}

});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;