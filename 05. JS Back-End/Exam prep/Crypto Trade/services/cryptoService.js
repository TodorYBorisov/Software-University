const Crypto = require('../models/Crypto');

async function getAll() {
    return Crypto.find({}).lean();  
}
//.sort({rooms:-1}).lean() за да ги сортираме descending  .limit(3) му казваме вземи последни три, _id, rooms идва от модела, .sort({ _id: -1 }).limit(3);
//return Book.find({}).populate('owner').lean() ще добави от owner модела свойствата на рег. потребителя _id, username, email, password, firsName, lastName това което е от моделa

async function getById(id) {
    return await Crypto.findById(id).lean();
}

async function create(crypto) {
    return await Crypto.create(crypto);
}

async function updateById(id, crypto) {
    const existing = await Crypto.findById(id);

    existing.name = crypto.name;
    existing.imageUrl = crypto.imageUrl;
    existing.price = crypto.price;
    existing.description = crypto.description;
    existing.payment = crypto.payment;
    

    await existing.save();
}



async function deleteById(id) {
    return Crypto.findByIdAndDelete(id);
}
//===========================================
async function addToBuyACrypto(cryptoId, userId) {
    const existing = await Crypto.findById(cryptoId);

    if (existing.buyACrypto.includes(userId)) {
        throw new Error('Cannot buy twice');
    }

    existing.buyACrypto.push(userId);
    return existing.save();
}

async function userPreference(userId) {
    return Crypto.find({ buyACrypto: userId }).lean();
}

async function search(nameSearch, paymentSearch) {

    let cryptos = await getAll();

    if (nameSearch){
        cryptos = cryptos.filter(cryptos => cryptos.name.toLowerCase().includes(nameSearch.toLowerCase()));
    }

    if (paymentSearch){
        cryptos = cryptos.filter(cryptos => cryptos.payment.toLowerCase() == paymentSearch.toLowerCase());
    }

    return cryptos;
}


//===========================================
module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    addToBuyACrypto,
    userPreference,
    search
    
};