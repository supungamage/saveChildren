var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProfileSchema = new Schema({
    name: String, 
    fname: String,
    lname: String,
    email: String,
    contact: [String],
    role: {
        type: Schema.ObjectId,
        ref: 'Role'
    },
    created: { type: Date},
    updated: { type: Date, default: Date.now },
    donationcount : Number
});

module.exports = mongoose.model('Profile', ProfileSchema, 'profile');