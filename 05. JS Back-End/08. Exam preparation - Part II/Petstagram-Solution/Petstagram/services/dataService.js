const { Photo } = require('../models/Photo.js');
const { User } = require('../models/User.js');

const getAllData = () => Photo.find().populate('owner', 'username');

const getDataById = (photoId) => Photo.findById(photoId).populate('owner commentList.userID', 'username');

const deleteDataById = (photoId) => Photo.findByIdAndDelete(photoId);

const updateDataById = (photoId, data) => {
    const { name, age, description, location, imageUrl } = data;
    return Photo.findByIdAndUpdate(photoId, { name, age, description, location, imageUrl }, { runValidators: true });
};

const createData = async (data, userId) => {
    const { name, age, description, location, imageUrl } = data;
    const newData = await Photo.create({ name, age, description, location, imageUrl, owner: userId });
    return newData;
};

const addComment = async (photoId, comment) => {
    // return Photo.updateOne({ _id: photoId }, { $push: { commentList: comment } });
    const curPhoto = await Photo.findById(photoId);
    curPhoto.commentList.push(comment);
    return await curPhoto.save();
};

const getUser = (userId) => User.findById(userId);

const getUserPhotos = async (userId) => {
    // return Photo.find({ owner: userId });
    const allUserPhoto = await Photo.find().lean();
    return allUserPhoto.filter(p => p.owner == userId);
};

module.exports = {
    getAllData,
    getDataById,
    deleteDataById,
    updateDataById,
    createData,
    addComment,
    getUser,
    getUserPhotos,
};


// TODO: SOME REQUESTS, IF THEY ARE NOT NECESSARY DELETE THEM

// const getLastThreeAdded = () => Photo.find().sort({ _id: -1 }).limit(3);

// const getFirstThreeAds = () => Photo.find().limit(3);

// const getDataBySearch = (query) => Photo.find({ 'SEARCEHD VARIABLE NAME': { $regex: new RegExp(query, 'gi') } });

// const getDataBySearch1 = (name, payment) => {
//     const query = {};
//     if (name) {
//         query.name = { $regex: new RegExp(name, 'gi') };
//     }
//     if (payment) {
//         query.payment = { $regex: new RegExp(payment, 'gi') };
//     }

//     return Crypto.find(query);
// };

// async function deleteHotel(hotelId, userId) {
//     await Hotel.findByIdAndDelete(hotelId);
//     await User.updateOne({ _id: userId }, { $pull: { userHotels: hotelId } });
// }

// const getAllHotels = () => Hotel.find().sort({ freeRooms: -1 });

// const isBought = async (userId, offerId) => {
//     const offer = await getDataById(offerId);
//     return offer.cryptoBuyer.includes(userId);
// };

// const buyCrypto = async (userId, offerId) => {
//     const offer = await getDataById(offerId);
//     if (offer.cryptoBuyer.includes(userId)) {
//         throw new Error('Already bought!');
//     }

//     offer.cryptoBuyer.push(userId);
//     await offer.save();
// };

// const getAllOffers = () => Auction.find({ isClosed: { $ne: true } });

// const getAllClosedOffers = (userId) => Auction.find({ isClosed: true, author: userId });

// const addNewBid = async (offerId, userId, newPrice) => {
//     const offer = await getOfferById(offerId);
//     if (offer.price > newPrice) {
//         throw new Error('New price must be higher than the current price!');
//     }

//     offer.price = newPrice;
//     offer.bidder.push(userId);
//     await offer.save();
//     return offer;
// };

// const closeCurrentAuction = (offerId) => Auction.updateOne({ _id: offerId }, { isClosed: true });

// const getMyBooks = (userId) => Book.find({ owner: userId });

// const wishBook = async (bookId, userId) => {
//     const book = await getBookById(bookId);
//     if (book.wishingList.includes(userId)) {
//         throw new Error('Book is already wished!');
//     }

//     book.wishingList.push(userId);
//     await book.save();
// };

// const hasWished = async (bookId, userId) => {
//     const book = await getBookById(bookId);
//     return book.wishingList.includes(userId);
// };


// async function checkIsAlreadyShared(pubId, userId) {
//     const currentPub = await getPubById(pubId);
//     return currentPub.usersShared.includes(userId);
// }

// const deleteAd = async (userId, adId) => {
//     await User.updateOne({ _id: userId }, { $pull: { myAds: adId } });
//     await Ad.findByIdAndDelete(adId);
// };

// const userApply = async (userId, adId) => Ad.updateOne({ _id: adId }, { $push: { usersApplied: userId } });

// const joinTheTrip = (userId, tripId) => Trip.updateOne({ _id: tripId }, { $inc: { seats: -1 }, $push: { buddies: userId } });

// const rentHouse = (offerId, userId) => Housing.updateOne({ _id: offerId }, { $push: { rentedHome: userId }, $inc: { availablePieces: -1 } });

// const signUpForCourse = async (courseId, userId) => {
//     await Course.updateOne({ _id: courseId }, { $push: { usersEnrolled: userId } });
//     await User.updateOne({ _id: userId }, { $push: { enrolledCourses: courseId } });
// };

// const getGuestPlaysDSC = () => Play.aggregate([
//     { $addFields: { countLikes: { $size: '$usersLiked' } } },
//     { $match: { isPublic: true } },
//     { $sort: { countLikes: -1 } },
//     { $limit: 3 },
// ]);

// const getUserPlayedPlays = () => Play.aggregate([
//     { $addFields: { countLikes: { $size: '$usersLiked' } } },
//     { $match: { isPublic: false } },
//     { $sort: { created: -1 } }
// ]);

// const getUserPlaysDSC = () => Play.aggregate([
//     { $addFields: { countLikes: { $size: '$usersLiked' } } },
//     { $match: { isPublic: true } },
//     { $sort: { created: -1 } },
// ]);

// const checkISIncludedInArray = (photoId, userId) => Photo.findOne({ _id: photoId, itemsBought: { $in: [userId] }, });

// const addComment = (photoId, comment) => Photo.updateOne({ _id: photoId }, { $push: { commentList: comment } });