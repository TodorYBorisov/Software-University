const Hotel = require('../models/Hotel');

async function getAll() {
    return Hotel.find({}).lean();  //.sort({rooms:-1}) за да ги сортираме 
}

async function getbyId(id) {
    return Hotel.findById(id).lean();
}

async function create(hotel) {
    return await Hotel.create(hotel);
}

async function updatebyId(id, hotel) {
    const existing = await Hotel.findById(id);

    existing.name = hotel.name;
    existing.city = hotel.city;
    existing.rooms = hotel.rooms;
    existing.imageUrl = hotel.imageUrl;

    await existing.save();
}

async function deletebyId(id) {
    return Hotel.findByIdAndDelete(id);
}

async function bookRoom(hotelId, userId) {
    const existing = await Hotel.findById(hotelId);

    if (existing.bookings.includes(userId)) {
        throw new Error('Cannot book twice');
    }

    existing.bookings.push(userId);
    await existing.save();
}

async function searchByUserPreference(userId) {
    return Hotel.find({ bookings: userId }).lean();

}

module.exports = {
    getAll,
    getbyId,
    create,
    updatebyId,
    deletebyId,
    bookRoom,
    searchByUserPreference
};