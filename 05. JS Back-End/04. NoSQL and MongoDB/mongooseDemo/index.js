const mongoose = require('mongoose');

const Cat = require('./models/Cat');
const Owner = require('./models/Owner');

async function conectDB() {

    await mongoose.connect('mongodb://127.0.0.1:27017/mongoDB');

    console.log('DB is connected');
    //метод по инстанция
    //cats.forEach(cat => cat.greet());

    //така вадим виртуалното пропърти
    // cats.forEach(cat => console.log(cat.info));

    // //ADVANCED static model method
    // const result = await Cat.giveMeCats();

    //READ from DB
    //const cats = await Cat.find({age:5});
    //const cats = await Cat.findOne();
    //const cats = await Cat.findById('6476f83eb5c1fa3eaf69f2ca');

    //CREATE and Save to  DB
    // const newCat = new Cat({
    //     name: 'Pesho',
    //     age: 12,
    //     breed: 'Angora',
    // });
    // await newCat.save();


    // const newCat = await Cat.create({
    //     name: 'Toshko',
    //     age: 12,
    //     breed: 'Angora'
    // });

    //UDATE DB
    // const toshko = await Cat.findOne({name:'Toshko'});
    // toshko.age = 39;
    // await toshko.save();

    //await Cat.findByIdAndUpdate('6476fd11f201d486893cec30', { $set: { age: 15 } });

    //DELETE from DB
    //await Cat.deleteOne({name: 'Pesho'});

    //await Cat.findByIdAndDelete('6476fd11f201d486893cec30');


    console.log();

}
conectDB();