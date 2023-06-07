const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true,
        minLength: 5,
        match: [/^[A-Za-z0-9]+$/,'User must be alphnumeric'],
        unique: true,

    },
    hashedPassword: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
               return /^[A-Za-z0-9]+$/.test(value);
            },
            message: 'Invalid password chars!'
        },
        minLength: 8,
    },
});

userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });

//валидиране на репеат паролата , че е същата като паролата
// userSchema.virtual('repeatPassword')
//     .set(function (value) {
//         if (value !== this.hashedPassword){

//             throw new mongoose.MongooseError('Password missmatch!');
//         }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;


//условие ако искаме username да е уникален, unique:true се добавя при username
//userSchema.index({ username: 1 }, { collation: { locale: 'en', strength: 2 } });