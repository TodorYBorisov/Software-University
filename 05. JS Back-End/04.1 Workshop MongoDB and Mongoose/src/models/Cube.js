const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
        maxLength: 10
    },
    imageUrl: {
        type: String,
        require: true,
    },
    difficultyLevel: {
        Number,
        require: true,
        min: 1,
        max: 8,
    },
    //accessories: {}

});

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;


•	Description - (String, required, max length validation)
•	ImageUrl - (String, required, http / https validation)
•	Difficulty Level - (Number, required, min and max valid range)
•	Accessories - (ObjectId, ref Accessories Model)
