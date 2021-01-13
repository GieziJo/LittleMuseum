const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    artist: {
        type: String
    },
    artist_id: {
        type: String
    },
    descrpition: {
        type: String
    },
    publisher: {
        type: String
    },
    publisher_id: {
        type: String
    },
    type: {
        type: String
    },
    size: {
        type: String
    },
    serial_number: {
        type: String
    },
    price:  {
        type: Number
    },
    currency:  {
        type: Number
    },
    caracteristics: {
        type: String
    },
    year: {
        type: Number
    },
    signed:  {
        type: Boolean
    },
    image_url:  {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Item = mongoose.model('item', ItemSchema);