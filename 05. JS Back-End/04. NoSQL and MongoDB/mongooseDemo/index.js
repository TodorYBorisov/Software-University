const mongoose = require('mongoose');

async function conectDB() {

await mongoose.connect('mongodb://127.0.0.1:27017/mongoDB');

console.log('DB is connected');
}
conectDB();