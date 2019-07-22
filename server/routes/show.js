const express = require('express');
const router = express.Router();
const _Events = require('../models/Events');
const auth = require('../middleware/auth');

//Show element by id which provided as a param and belong to user id
router.get('/:id', auth, async (req, res) => {
    const { id } = req.params;
    await _Events.findById(id, (err, events) => {
        if(err) {
            console.info(err);
        }
        res.status(200).json({events});
    });
});
//Show all events which belong to user id
router.get('/', auth, async (req, res) => {
   await _Events.find({owner: req.header('owner')}, (err, events) => {
    console.info(events);
    res.status(200).json(events);
   });
});

module.exports = router;