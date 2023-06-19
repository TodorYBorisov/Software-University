const Photo = require('../models/Photo');

async function getAll() {
    return Photo.find({}).populate('owner', 'username').lean();  
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa
//populate('owner').populate('budies').lean() така се популират по два обекта
async function getLastThree() {
	return Photo.find({}).sort({_id: -1}).limit(3).lean();
}

async function getFirstThree() {
	return Photo.find({}).limit(3).lean();
}


async function getById(id) {
    return await Photo.findById(id).populate('owner commentList.userId', 'username').lean(); 
}

async function create(photo) {
    return await Photo.create(photo);
}

async function updateById(id, photo) {
    const existing = await Photo.findById(id);

    existing.name = photo.name;
    existing.age = photo.age;
    existing.description = photo.description;
    existing.location = photo.location;
    existing.imageUrl = photo.imageUrl;
   
    await existing.save();
}


async function deleteById(id) {
    return Photo.findByIdAndDelete(id);
}
//===========================================
async function addToWishList(bookId, userId) {
    const existing = await Photo.findById(bookId);

    if (existing.wishingList.includes(userId)) {
        throw new Error('Cannot wish twice');
    }

    existing.wishingList.push(userId);
    return existing.save();
}

//тук е за ne]ata kojto e Share
async function userPreference(userId) {
    return Photo.find({ wishingList: userId }).lean();

    
}

//тук е нещата който са created by him
async function userCreatedItems(userId) {
    return Photo.find({ owner: userId }).lean();
    
}

//може да бъде и по name и payment/platfor
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

async function addComment(id, comment) {
    const curPhoto = await Photo.findById(id);
    curPhoto.commentList.push(comment);
    return await curPhoto.save();
}


//търсене с едно поле search
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
    addToWishList,
    userPreference,
    search,
    getLastThree,
    getFirstThree,
    userCreatedItems,
    addComment
    
};

// за search функацията да сменя, масива който идва от модела