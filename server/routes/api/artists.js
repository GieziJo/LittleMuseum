const express = require('express');
const router = express.Router();

// Artist Model
const Artist = require('../../models/Artist');

// @route  GET api/artists
// @desc   Get All Artists
// @access Public
router.get('/', (req, res) => {
    Artist.find()
        .sort({ name: 1})
        .then(artists => res.json(artists))
});

// @route  POST api/artists
// @desc   Create an artist
// @access Public
router.post('/', (req, res) => {
    req.chec
    const newArtist = new Artist({
        name: req.body.name,
        description: req.body.description
    });

    newArtist.save().then(artist => res.json(artist));
});

// @route  DELETE api/artists/:id
// @desc   Delete an artist
// @access Public
router.delete('/:id', (req, res) => {
    Artist.findById(req.params.id)
        .then(artist => artist.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});


module.exports = router;