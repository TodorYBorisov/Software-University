const Animal = require('../models/Animal');

async function getAll() {
    return Animal.find({}).lean();  
}

async function getLastThree() {
	return Animal.find({}).sort({_id: -1}).limit(3).lean();
}

async function getFirstThree() {
	return Animal.find({}).limit(3).lean();
}

async function getById(id) {
    return await Animal.findById(id).lean();
}

async function create(animal) {
    return await Animal.create(animal);
}

async function updateById(id, animal) {
    const existing = await Animal.findById(id);

    existing.name = animal.name;
    existing.years = animal.years;
    existing.kind = animal.kind;
    existing.imageUrl = animal.imageUrl;
    existing.need = animal.need;
    existing.location = animal.location;
    existing.description = animal.description;

    await existing.save();
}

async function deleteById(id) {
    return Animal.findByIdAndDelete(id);
}
//===========================================
async function addToDonate(animalId, userId) {
    const existing = await Animal.findById(animalId);

    if (existing.donations.includes(userId)) {
        throw new Error('Cannot wish twice');
    }

    existing.donations.push(userId);
    return existing.save();
}


async function search(query) {
	let animals = await getAll();

	if (query){
		animals = animals.filter(e => e.location.toLowerCase() == query.toLowerCase());
	}

	return animals;

}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    addToDonate,
    search,
    getLastThree,
    getFirstThree,  
};
