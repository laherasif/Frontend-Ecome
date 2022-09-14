const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChangeappointmentSchema = new Schema({
    fname: {
        type: String,
        // required: true
    },
    lname:{
        type:String,
        // required : true
    },

    appointDate:{
     type: String,
    },
    email :{
        type : String,
        // required : true
    },
 
    hospital: {
        type: String,
        // required: true
    },
    
    name_doctor: {
        type: String,
        // required: true
    },
    minuts: {
        type: String
    },
    hours: {
        type: String,
        // default: Date.now
    },
    newDate: {
        type: String,
        // required: true
    },
    newminuts: {
        type: String
    },
    newhours: {
        type: String,
        // default: Date.now
    },


    change :{
        type: Boolean,
        default : false
    }
    
});

const ChangeAppointment = mongoose.model('chnageappoints', ChangeappointmentSchema);

module.exports = ChangeAppointment;