const Trip = require('../models/Trip');

async function getAll() {
    return Trip.find({}).lean();  
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa

async function getById(id) {
    return await Trip.findById(id).populate('creator').lean();
}

async function create(trip) {
    return await Trip.create(trip);
}

async function updateById(id, trip) {
    const existing = await Trip.findById(id);

    existing.startPoint = trip.startPoint;
    existing.endPoint = trip.endPoint;
    existing.date = trip.date;
    existing.time = trip.time;
    existing.imageUrl = trip.imageUrl;
    existing.brand = trip.brand;
    existing.seats = trip.seats;
    existing.price = trip.price;
    existing.description = trip.description;


    await existing.save();
}


async function deleteById(id) {
    return Trip.findByIdAndDelete(id);
}
//===========================================
async function addToWishList(tripId, userId) {
    const existing = await Trip.findById(tripId);

    if (existing.wishingList.includes(userId)) {
        throw new Error('Cannot wish twice');
    }

    existing.wishingList.push(userId);
    return existing.save();
}

async function userPreference(userId) {
    return Trip.find({ wishingList: userId }).lean();
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

// за search функацията да сменя, масива който идва от модела