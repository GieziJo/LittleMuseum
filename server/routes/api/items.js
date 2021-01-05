const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ publisher: 1, title: 1, year: 1})
        .then(items => res.json(items))
});

// @route  GET api/item
// @desc   Get an Item by ID
// @access Public
router.get('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
});

// @route  POST api/items
// @desc   Create an item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        title: req.body.title,
        artist: req.body.artist,
        descrpition: req.body.descrpition,
        publisher: req.body.publisher,
        type: req.body.type,
        size: req.body.size,
        serial_number: req.body.serial_number,
        price: req.body.price,
        caracteristics: req.body.caracteristics,
        year: req.body.year,
        signed: req.body.signed,
        image_url: req.body.image_url
    });

    newItem.save().then(item => res.json(item));
});

// @route  DELETE api/items/:id
// @desc   Delete an item
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;