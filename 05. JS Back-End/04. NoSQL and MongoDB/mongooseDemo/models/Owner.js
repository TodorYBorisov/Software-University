const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
});

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;