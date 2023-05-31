const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,// добавяме вграден валидатор
        maxLength: 10
    }, // можем да задаваме специфично пропърти и по този начин гарантираме, че ще го има
    age: Number,
    breed: String,
});

//може да слагме методи на схемата, къдeто this сочи към конкретния докуемт един вид
catSchema.methods.greet = function () {
    console.log(`Hello i\'m cat with name ${this.name}`);
};

//създаване на виртуално пропърти
catSchema.virtual('info').get(function () {
    return `My name is ${this.name} nad I'm ${this.age} years old.`;
});


//валидиане на данни през схемата, стринга ни е error message
catSchema.path('name').validate(function () {
    return this.name.length >= 2 && this.name.length <= 10;
    
}, 'The name must be between 2 and 10 symbols long!');


////ADVANCED static model method
catSchema.static('giveMeCats', function () {
    return this.find();
});


const Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;