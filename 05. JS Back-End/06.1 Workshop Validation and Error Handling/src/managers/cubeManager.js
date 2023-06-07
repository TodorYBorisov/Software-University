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

//тук може да добавим .populate('accessories');, за да може да вземем към всеки куб неговите аксесоари, идва от референцията на модела
exports.getOne = (getById) => Cube.findById(getById);


//или правим нов, 
exports.getOneWithAccessories = (getById) => this.getOne(getById).populate('accessories');

//тук парвим нов куб с този синтакс е като е accessory Manager
//exports.create = (cubeData) => Cube.create(cubeData);

exports.create = (cubeData) => {

    const cube = new Cube(cubeData);

    return cube.save();
};

exports.delete = (id) => Cube.findByIdAndDelete(id);

exports.update = (id, cubeData) => Cube.findByIdAndUpdate(id, cubeData);

//така правим релацията м/у куба с неговото id и id на аксесоара.
exports.attachAccessory = async (id, accessory) => {
    const cube = await Cube.findByIdAndUpdate(id);
    cube.accessories.push(accessory);
    return cube.save();
};