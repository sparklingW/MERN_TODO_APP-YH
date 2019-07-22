const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const config = require('config');
const _Events = require('../models/Events');

//Delete event by id provided in URL
router.delete('/:id', auth ,async (req, res, next)  =>  {
    _Events.findByIdAndDelete(req.params.id, (err, ress) => {
        if(ress) {
            ress.save();
            res.send(ress);
        }
    });
});
module.exports = router;