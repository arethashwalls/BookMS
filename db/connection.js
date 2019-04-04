//Imports
const mongoose = require('mongoose');

//Set URI by .env:
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost/bookms';

//Connect:
mongoose.connect(mongoURI, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

module.exports = db;