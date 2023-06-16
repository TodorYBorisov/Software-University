const Ad = require('../models/Ad');

async function getAll() {
    return Ad.find({}).populate('author').lean();
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa
//populate('owner).populate('budies').lean() така се популират по два обекта
async function getLastThree() {
	return Ad.find({}).sort({_id: -1}).limit(3).lean();
}

async function getFirstThree() {
	return Ad.find({}).limit(3).lean();
}

async function getById(id) {
    return await Ad.findById(id).populate('author').populate('usersApplied').lean();
}

async function create(ad) {
    return await Ad.create(ad);
}

async function updateById(id, ad) {
    const existing = await Ad.findById(id);

    existing.headline = ad.headline;
    existing.location = ad.location;
    existing.company = ad.company;
    existing.description = ad.description;
   
    await existing.save();
}


async function deleteById(id) {
    return Ad.findByIdAndDelete(id);
}
//===========================================
async function addToApplied(adId, userId) {
    const existing = await Ad.findById(adId);

    if (existing.usersApplied.includes(userId)) {
        throw new Error('Cannot applied twice');
    }

    existing.usersApplied.push(userId);
    return existing.save();
}

//тук е за неща като Share
async function userPreference(userId) {
    return Ad.find({ usersApplied: userId }).lean();

    
}

//тук е нещата който са created by him
async function userCreatedItems(userId) {
    return Ad.find({ author: userId });
    
}

//може да бъде и по name и payment/platfor
// async function search(nameSearch, platformSearch) {

//     let games = await getAll();

//     if (nameSearch){
//         games = games.filter(games => games.name.toLowerCase().includes(nameSearch.toLowerCase()));
//     }

//     if (platformSearch){
//         games = games.filter(games => games.platform.toLowerCase() == platformSearch.toLowerCase());
//     }

//     return games;
// }


//търсене с едно поле search
async function search(query) {

	let ads = await getAll();

	if (query){
		ads = ads.filter(e => e.author.email.toLowerCase() == query.toLowerCase());
	}

	return ads;
}

//===========================================
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    addToApplied,
    userPreference,
    search,
    getLastThree,
    getFirstThree,
    userCreatedItems
    
};

// за search функацията да сменя, масива който идва от модела