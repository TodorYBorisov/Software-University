const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionStr = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(connectionStr, { useUnifiedTopology: true });

client.connect(function (err) {
    const db = client.db('testdb');
    const people = db.collection('people');
    people.insertOne({ 'name': 'Ivan' }, (err, result) => {
        people.find({ name: 'Ivan' }).toArray((err, data) => {
            console.log(data);
        });
    });
});