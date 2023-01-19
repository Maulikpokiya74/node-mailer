const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/emailSend');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Db not connecte'));

db.once('open', (err) => {
    if (err) {
        console.log(err.message);
    }
    console.log('Db is connected successfully.....!');
})