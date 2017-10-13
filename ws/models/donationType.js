var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DonationTypeSchema = new Schema({
    name: String
});

module.exports = mongoose.model('DonationType', DonationTypeSchema, 'donationType');