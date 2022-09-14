const mongoose = require('mongoose');

const Schema = mongoose.Schema

const ContactUs = new Schema({
   
    fname: {
        type: String,
        required: true
    },
   
    email: {
        type: String,
        required: true
    },
    
    mobile: {
        type: String,
    },
    address: {
        type: String,
        required: true
    },
  
    desc: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('ContactUs', ContactUs);