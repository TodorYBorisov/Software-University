const Game = require('../models/Game');

async function getAll() {
    return Game.find({}).lean();  //.sort({rooms:-1}) за да ги сортираме 
}

async function getById(id) {
    return await Game.findById(id).lean();
}

async function create(game) {
    return await Game.create(game);
}

async function updateById(id, game) {
    const existing = await Game.findById(id);

    existing.name = game.name;
    existing.platform = game.platform;
    existing.imageUrl = game.imageUrl;
    existing.price = game.price;
    existing.genre = game.genre;
    existing.description = game.description;

    await existing.save();
}

async function deleteById(id) {
    return Game.findByIdAndDelete(id);
}
//===========================================
async function addToWishList(gameId, userId) {
    const existing = await Game.findById(gameId);

    if (existing.boughtBy.includes(userId)) {
        throw new Error('Cannot buy twice');
    }

    existing.boughtBy.push(userId);
    return existing.save();
}

async function userPreference(userId) {
    return Game.find({ boughtBy: userId }).lean();
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


//===========================================
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    addToWishList,
    userPreference,
    search

};