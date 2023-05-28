//тук ще менажираме данните свързани с кубовете
//name, description, imageUrl, difficultyLevel = cubeData
const cubes = [];

exports.getAll = ()=>cubes.slice();  // със слайс ще направим един вид копие на масива, , зада  върнем нова референция към getAll

exports.create = (cubeData) => {

    const newCube = {
        id: cubes.length + 1, // така задаваме номерация 
        ...cubeData,
    };
    cubes.push(newCube);

    return newCube;
};