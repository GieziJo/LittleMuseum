const express = require('express');
const router = express.Router();

// Publisher Model
const Publisher = require('../../models/Publisher');

// @route  GET api/publishers
// @desc   Get All Publishers
// @access Public
router.get('/', (req, res) => {
    Publisher.find()
        .sort({ name: 1})
        .then(publishers => res.json(publishers))
});

// @route  POST api/publishers
// @desc   Create an publisher
// @access Public
router.post('/', (req, res) => {
    const newPublisher = new Publisher({
        name: req.body.name,
        description: req.body.description
    });

    newPublisher.save().then(publisher => res.json(publisher));
});

// @route  DELETE api/publishers/:id
// @desc   Delete an publisher
// @access Public
router.delete('/:id', (req, res) => {
    Publisher.findById(req.params.id)
        .then(publisher => publisher.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;