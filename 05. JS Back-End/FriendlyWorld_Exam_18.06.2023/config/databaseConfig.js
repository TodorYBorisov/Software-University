const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/friendlyWorld'; 

module.exports = async (app) => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          
        });
        console.log('Database connected');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};