const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const _Events = require('../models/Events');
const auth = require('../middleware/auth');
const regs = require('../helpers/regulars');
//  @TYPE PUT        /edit
//  @DESCRIPTION     edit todo by id which provided in URL
//  @ACCESS          Public
router.put('/:id', [
check('name').isLength({min: 1, max: 40}),
check('date').isLength({min: 10, max: 10})
] ,auth ,async (req, res) => {
console.log(req.params);
const errors = validationResult(req);
if(!errors.isEmpty()) {
    res.status(422).send('Errors occured');
}
await _Events.findById(req.params.id, async (err, event) => {
    console.log(event);
    if(!event) {
        res.send(404).send('Event not found');
    }
    event.name = req.body.name;
    event.date = req.body.date;
    // event.completed = req.body.completed;
    if(!event.name.match(regs.create.name)) {
        res.status(401).send('Name is not valid');
    } else {
        await event.save();
        console.log(event);
        res.status(201).json(event);
    }
});
});

module.exports = router;