const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../middleware/auth');
const _Events = require('../models/Events');
const regs = require('../helpers/regulars');

router.post('/', [
	check('name').isLength({min: 1, max: 40}),
	check('date').isLength({min: 10, max: 10}),
	] , auth ,async (req, res) => {
	const { name, date } = req.body;
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		return res.status(422).send(errors);
	} 
	try {
		let event = new _Events({
			name: name,
			date: date,
			owner: req.body.owner,
		});
		///^[a-zA-Z]{2}[a-zA-Z0-9\s]+$/
		if(!name.match(regs.create.name)) {
			res.status(401).send('Name is not valid');
		} else {
			await event.save();
			res.status(201).json({ event });
		}
	} catch (e) {
		console.log(e.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;