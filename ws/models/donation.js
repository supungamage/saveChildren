var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonationSchema = new Schema({
    date: { type: Date}, 
    donationtype: { type: String, ref: 'DonationType' },
    orphanage: { type: String, ref: 'Orphanage' },
    profile: { type: String, ref: 'Profile' },
    request: { type: Schema.Types.Mixed, ref: 'Request'},
    quentity: Number,
    fullfilled : Boolean,
    fullfilledQuentity: Number,
    created: { type: Date},
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', DonationSchema, 'donation');