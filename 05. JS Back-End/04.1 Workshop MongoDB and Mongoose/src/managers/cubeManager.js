const uniqid = require('uniqid');
//тук ще менажираме данните свързани с кубовете
//name, description, imageUrl, difficultyLevel = cubeData

const cubes = []; //това ни се явява базата в момента

exports.getAll = (search, from, to) => {

    let result = cubes.slice(); // със слайс ще направим един вид копие на масива, , зада  върнем нова референция към getAll

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

exports.getOne = (getById) => cubes.find(x => x.id == getById);

exports.create = (cubeData) => {

    const newCube = {
        id: uniqid(), // така задаваме униклен номер на всеки елемент с тази библиотека
        ...cubeData,
    };
    cubes.push(newCube);

    return newCube;
};