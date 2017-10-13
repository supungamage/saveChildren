var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RequestSchema = new Schema({ 
    description: String,
    requestedQuantity: Number, 
    fullfilledQuantity: Number,
    fullfilled : Boolean,
    created: { type: Date},
    updated: { type: Date, default: Date.now }
});

var OrphanageSchema = new Schema({
    
    name: String, 
    description: String,
    image: String,
    address: String,
    dictrict: String,
    city: String,
    contacts: [String],
    owners: [{ type: String, ref: 'Profile' }],
    caregivers: [{ type: String, ref: 'Profile' }],
    totaldonationcount: Number,
    rating: { type: String, ref: 'Rating' },
    noofchildren: Number,                            
    created: { type: Date},
    updated: { type: Date, default: Date.now },
    requests : [RequestSchema]
});

module.exports = mongoose.model('Orphanage', OrphanageSchema, 'orphanage');