var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RatingSchema = new Schema({
    name: String,
    rate: Number
});

module.exports = mongoose.model('Rating', RatingSchema, 'rating');