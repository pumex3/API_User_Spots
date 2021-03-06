const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    permission: {
        type: String,
        require: false,
   }
})

module.exports = mongoose.model('User', UserSchema);