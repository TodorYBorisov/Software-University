const uniqid = require('uniqid');
//тук ще менажираме данните свързани с кубовете
//name, description, imageUrl, difficultyLevel = cubeData
const cubes = [];

exports.getAll = () => cubes.slice();  // със слайс ще направим един вид копие на масива, , зада  върнем нова референция към getAll

exports.getOne = (getById) => cubes.find(x => x.id == getById);

exports.create = (cubeData) => {

    const newCube = {
        id: uniqid(), // така задаваме униклен номер на всеки елемент с тази библиотека
        ...cubeData,
    };
    cubes.push(newCube);

    return newCube;
};