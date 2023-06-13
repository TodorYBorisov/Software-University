const Auction = require('../models/Auction');

async function getAll() {
    return Auction.find({}).lean();
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa

async function getById(id) {
    return await Auction.findById(id).populate('author bidder').lean();
}

async function create(auction) {
    return await Auction.create(auction);
}

async function updateById(id, auction) {
    const existing = await Auction.findById(id);

    existing.title = auction.title;
    existing.description = auction.description;
    existing.category = auction.category;
    existing.imageUrl = auction.imageUrl;
    existing.price = auction.price;

    await existing.save();
}


async function deleteById(id) {
    return Auction.findByIdAndDelete(id);
}
//===========================================
async function addToWishList(auctionId, userId) {
    const existing = await Auction.findById(auctionId);

    if (existing.wishingList.includes(userId)) {
        throw new Error('Cannot wish twice');
    }

    existing.wishingList.push(userId);
    return existing.save();
}

async function userPreference(userId) {
    return Auction.find({ wishingList: userId }).lean();
}

async function search(nameSearch, platformSearch) {

    let games = await getAll();

    if (nameSearch) {
        games = games.filter(games => games.name.toLowerCase().includes(nameSearch.toLowerCase()));
    }

    if (platformSearch) {
        games = games.filter(games => games.platform.toLowerCase() == platformSearch.toLowerCase());
    }

    return games;
}

async function bid(auctionId, userId, amount) {
    const existing = await Auction.findById(auctionId);

    existing.bidder.push(userId);
    existing.price = amount;
    return existing.save();

}

//===========================================
async function getAllClose() {
    const allAuction = await Auction.find().populate('bidder').lean();
    return allAuction.filter(a => a.isClosed == true);
}

async function close(auctionId) {
    const existing = await Auction.findById(auctionId);
    existing.isClosed = true;
    return existing.save();
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
    search,
    bid,
    close,
    getAllClose

};

// за search функацията да сменя, масива който идва от модела