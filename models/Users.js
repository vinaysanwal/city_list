const mongoose = require('mongoose');

const CuserSchema = new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     email: {
        type: String,
        required: true,
        unique: true
     },
     password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
    
});


module.exports = Cusers = mongoose.model('Cusers', CuserSchema);