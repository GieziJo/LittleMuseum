const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const PublisherSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Publisher = mongoose.model('publisher', PublisherSchema);