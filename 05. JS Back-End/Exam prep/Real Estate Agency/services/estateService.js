const Estate = require('../models/Estate');

async function getAll() {
    return Estate.find({}).lean();  
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa
//populate('owner).populate('budies').lean() така се популират по два обекта
async function getLastThree() {
	return Estate.find({}).sort({_id: -1}).limit(3).lean();
}

async function getById(id) {
    return await Estate.findById(id).populate('owner').populate('rented').lean();;
}

async function create(estate) {
    return await Estate.create(estate);
}

async function updateById(id, estate) {
    const existing = await Estate.findById(id);

    existing.name = estate.name;
    existing.type = estate.type;
    existing.year = estate.year;
    existing.city = estate.city;
    existing.imageUrl = estate.imageUrl;
    existing.description = estate.description;
    existing.pieces = estate.pieces;
    await existing.save();
}

async function deleteById(id) {
    return Estate.findByIdAndDelete(id);
}
//===========================================
async function rentHouse(houseId, userId) {
    const existing = await Estate.findById(houseId);

    if (existing.rented.includes(userId)) {
        throw new Error('Cannot rent');
    }

    existing.rented.push(userId);
    existing.pieces--;

    return existing.save();
}

async function userPreference(userId) {
    return Estate.find({ wishingList: userId }).lean();
}

// async function search(nameSearch, typeSearch) {

//     let games = await getAll();

//     if (nameSearch){
//         games = games.filter(games => games.name.toLowerCase().includes(nameSearch.toLowerCase()));
//     }

//     if (typeSearch){
//         games = games.filter(games => games.platform.toLowerCase() == typeSearch.toLowerCase());
//     }

//     return games;
// }

async function search(query) {
	let estates = await getAll();

	if (query){
		estates = estates.filter(e => e.type.toLowerCase() == query.toLowerCase());
	}

	return estates;

}
//===========================================
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    rentHouse,
    userPreference,
    search,
    getLastThree
    
};

// за search функацията да сменя, масива който идва от модела