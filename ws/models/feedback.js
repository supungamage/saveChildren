var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FeedbackSchema = new Schema({
    feedback : String,
    rating: { type: String, ref: 'Rating' },
    profile: { type: String, ref: 'Profile' },
    orphanage : { type: String, ref: 'Orphanage' },
    created: { type: Date},
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', FeedbackSchema, 'feedback');