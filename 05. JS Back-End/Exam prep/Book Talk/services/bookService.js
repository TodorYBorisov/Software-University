const Book = require('../models/Book');

async function getAll() {
    return Book.find({}).lean();  //.sort({rooms:-1}) за да ги сортираме 
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

async function userPreference(userId) {
    return Book.find({ wishingList: userId }).lean();
}


//===========================================
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    addToWishList,
    userPreference
    
};