const mongoose = require ('mongoose');

const SpotSchema = new mongoose.Schema ({
     image: String,
     title: String,
     team: [String],
     user: {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'User'
     }
})

module.exports = mongoose.model('Spot', SpotSchema);