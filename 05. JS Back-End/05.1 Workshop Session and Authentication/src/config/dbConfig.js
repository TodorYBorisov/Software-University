const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/cubicle';//тук сменяме името на базата данин само 

async function conectDB() {
    await mongoose.connect(uri);

}
conectDB();

module.exports = conectDB;