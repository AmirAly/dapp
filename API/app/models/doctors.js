var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Doctors = new Schema({
    Email: { type: String, required: 'Please enter Email' },
    Phone: { type: String, required: 'Please enter Phone number' },
    Fullname: { type: String, required: 'Please enter name' },
    Status: { type: String, required: 'Please enter status' },
    Speciality: { type: String },
    Subscription: {
        Expiry: { type: Date },
        Plan: { type: String },
        RenewalCost: { type: Number }
    },
    LastLogin: { type: Date, required: "Please enter last login date" },
    Token: { type: String, required: "Please enter token", default: "_" },
    ////Payments: [{
    ////    Date: { type: Date, required: "Please enter last payment date" },
    ////    Amount: { type: Number, required: "Please enter amount" },
    ////    Statement: { type: String, required: "Please enter statement" },
    ////    Source: { type: String, required: "Please enter source" }
    ////}]
});
module.exports = mongoose.model('Doctors', Doctors);











