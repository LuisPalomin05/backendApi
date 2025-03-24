const mongoose = require('mongoose');

require('dotenv').config();

const URI = process.env.MONGODB_URI
? process.env.MONGODB_URI
: 'mongodb://localhost:27017/test';

mongoose.connect(URI, {
    
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
}); 