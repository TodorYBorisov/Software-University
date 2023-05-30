const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const connectionStr = 'mongodb://127.0.0.1:27017';

const client = new mongodb.MongoClient(connectionStr);

async function conectDB(params) {

    await client.connect();
    const db = client.db('myDB');
    const test = db.collection('test');
    const result = await test.find().toArray();
    
    console.log(result);
}
conectDB();