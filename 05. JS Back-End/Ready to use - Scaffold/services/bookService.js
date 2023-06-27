const Book = require('../models/Book');

async function getAll() {
    return Book.find({}).lean();  
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa
//populate('owner').populate('budies').lean() така се популират по два обекта
async function getLastThree() {
	return Book.find({}).sort({_id: -1}).limit(3).lean();
}

async function getFirstThree() {
	return Book.find({}).limit(3).lean();
}




async function getById(id) {
    return await Book.findById(id).lean();
}

async function create(book) {
    return await Book.create(book);
}

async function updateById(id, book) {
    const existing = await Book.findById(id);

    existing.title = book.title;
    existing.author = book.author;
    existing.imageUrl = book.imageUrl;
    existing.review = book.review;
    existing.genre = book.genre;
    existing.stars = book.stars;

    await existing.save();
}

async function deleteById(id) {
    return Book.findByIdAndDelete(id);
}
//===========================================
async function addToWishList(bookId, userId) {
    const existing = await Book.findById(bookId);

    if (existing.wishingList.includes(userId)) {
        throw new Error('Cannot wish twice');
    }

    existing.wishingList.push(userId);
    return existing.save();
}

//тук е за ne]ata kojto e Share
async function userPreference(userId) {
    return Book.find({ wishingList: userId }).lean();

    
}

//тук е нещата който са created by him
async function userCreatedItems(userId) {
    return Book.find({ author: userId }).lean();
    
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
    userCreatedItems
    
};

// за search функацията да сменя, масива който идва от модела