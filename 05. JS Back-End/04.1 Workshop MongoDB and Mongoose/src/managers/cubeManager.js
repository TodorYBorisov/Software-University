const Cube = require('../models/Cube');

//тук ще менажираме данните свързани с кубовете
//name, description, imageUrl, difficultyLevel = cubeData


exports.getAll = async (search, from, to) => {

    let result = await Cube.find().lean();

    //сега филтрира в паметта, трябва да филтрира вътре в базата
    if (search) {
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (from) {
        result = result.filter(cube => cube.difficultyLevel >= Number(from));
    }
    if (to) {
        result = result.filter(cube => cube.difficultyLevel <= Number(to));
    }

    return result;
};

exports.getOne = (getById) => Cube.findById(getById);

//тук парвим нов куб 
exports.create = async (cubeData) => {
    const cube = new Cube(cubeData);
    await cube.save();

    return cube;
};