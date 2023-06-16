const Publication = require('../models/Publication');

async function getAll() {
    return Publication.find({}).lean();  
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa
//populate('owner).populate('budies').lean() така се популират по два обекта
async function getLastThree() {
	return Publication.find({}).sort({_id: -1}).limit(3).lean();
}

async function getById(id) {
    return await Publication.findById(id).populate('author').lean();
}

async function create(publication) {
    return await Publication.create(publication);
}

async function updateById(id, publication) {
    const existing = await Publication.findById(id);

    existing.title = publication.title;
    existing.technique = publication.technique;
    existing.imageUrl = publication.imageUrl;
    existing.certificate = publication.certificate;

    await existing.save();
}

async function deleteById(id) {
    return Publication.findByIdAndDelete(id);
}
//===========================================
async function addToShared(publicationId, userId) {
    const existing = await Publication.findById(publicationId);

    if (existing.shared.includes(userId)) {
        throw new Error('Cannot wish twice');
    }

    existing.shared.push(userId);
    return existing.save();
}

async function userPreference(userId) {
    return Publication.find({ shared: userId }).lean();
}

//нещата който са създадениот автора
async function userCreatedItems(userId) {
    return Publication.find({ author: userId });
    
}

async function search(nameSearch, platformSearch) {

    let games = await getAll();

    if (nameSearch){
        games = games.filter(games => games.name.toLowerCase().includes(nameSearch.toLowerCase()));
    }

    if (platformSearch){
        games = games.filter(games => games.platform.toLowerCase() == platformSearch.toLowerCase());
    }

    return games;
}


//With one fiels search
// async function search(query) {
// 	let estates = await getAll();

// 	if (query){
// 		estates = estates.filter(e => e.type.toLowerCase() == query.toLowerCase());
// 	}

// 	return estates;

// }

//===========================================
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    addToShared,
    userPreference,
    search,
    getLastThree,
    userCreatedItems
    
};

// за search функацията да сменя, масива който идва от модела