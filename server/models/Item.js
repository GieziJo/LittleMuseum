const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    artist:{
        type: Schema.Types.ObjectId,
        ref: 'artist'
    },
    descrpition: {
        type: String
    },
    publisher:{
        type: Schema.Types.ObjectId,
        ref: 'publisher'
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