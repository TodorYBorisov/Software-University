const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        require: true
    },
    hashedPassword: {
        type: String,
        required: true,
    },
});

//валидиране на репеат паролата , че е същата като паролата
// userSchema.virtual('repeatPassword')
//     .set(function (value) {
//         if (value !== this.hashedPassword){

//             throw new mongoose.MongooseError('Password missmatch!');
//         }
// });

const User = mongoose.model('User', userSchema);

module.exports = User;