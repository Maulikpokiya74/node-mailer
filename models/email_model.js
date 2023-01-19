const mongoose = require('mongoose');

const emailSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

const emailsend = mongoose.model('Email', emailSchema);

module.exports = emailsend;