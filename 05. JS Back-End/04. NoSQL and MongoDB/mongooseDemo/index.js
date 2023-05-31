const mongoose = require('mongoose');

const Cat = require('./models/Cat');

async function conectDB() {

    await mongoose.connect('mongodb://127.0.0.1:27017/mongoDB');

    console.log('DB is connected');

    const cats = await Cat.find();

    //cats.forEach(cat => cat.greet());

    //така вадим виртуалното пропърти
    cats.forEach(cat =>console.log(cat.info));

}
conectDB();