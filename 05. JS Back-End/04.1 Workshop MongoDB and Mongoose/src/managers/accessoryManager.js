const Accessory = require('../models/Accessory');

exports.create = (accessoryData) => Accessory.create(accessoryData);

exports.getAll = () => Accessory.find();

//правим ф-я, която взима останалите аксесоари, без тези който ние имаме
exports.getRest = (accessoryId) => Accessory.find({ _id: { $nin: accessoryId } });

