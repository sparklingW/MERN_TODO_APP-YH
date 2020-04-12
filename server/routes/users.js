const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const _crypt = require('../helpers/crypt-password');
const User = require('../models/User');
const _Events = require('../models/Events');
const regs = require('../helpers/regulars');


// @    Method POST /users/register
// @    Register new user
// @    Public
router.post('/register', [
	//Validating form
	check('email', 'Email field cannot be empty').isEmail(),
	check('password', 'Password cannot be empty').isLength({min: 1}),
] , async (req, res) => {
	const {email , password, name} = req.body;
	const errors = validationResult(req);
	if(!errors.isEmpty()) {
		return res.status(422).json(errors);
	}
	try {
		// *Search user in db, if already exist throw an error
		//Creating new user
		let user = await User.findOne({email});
		console.log(user);
		if(user) {
			console.log('Email already exist');
			let newUser = {
				errorEmail: true,
				email: 'Email is already exist'
			}
			console.log(newUser);
			return res.status(400).json(newUser);
		} else {
			let newUser = new User({
				name,
				email,
				password
			});
			const hashed = await _crypt(password);
			newUser.password = hashed.password;
			newUser.salt = hashed.salt;
			//Add new user to db
			await newUser.save();
			res.status(200).json(newUser);
		}
	} catch (e) {
		console.log(`${e.message}`);
		res.status(500).send('Server error');
	}
});

router.post('/login', [
	check('email').isEmail(),
	check('password').isEmpty(),
] , async (req, res) => {
	const { email, password } = req.body;
	const errors = validationResult(req.body);
	if(!errors.isEmpty()) {
		return res.status(422).send('Validation error');
	}
	try {
		const find = await User.findOne({ email }, (err, ress)=> {
			console.info(ress);
			if(!ress) {
				return res.status(422).json({message: 'User not found'});
			}
		});
		const payload = {
			user: {
				id: find._id
			}
		};
		console.log('Logiiin');
		//Giving jwt to user
		jwt.sign(payload,
			config.get("jwtSecret"),
		   async (err, token) => {
				if(err) { return res.send({message: "ERROR FROM LOGIn"}); }
				//Decrypt password and compare them
				 await bcrypt.compare(password, find.password, (err, result) => {
					if (!result) {
						return res.status(422).send("Error was occured");
					} 
					return res.status(201).json({ token, find: find._id, email });
			   });
			});
	} catch (e) {
		console.log(e.message);
	}
});

// @    Method GET /users/me/info
// @    Get access to account
// @    Public
router.get('/me', auth, async (req, res) => {
	res.send('Hello');
});
router.get('/info', auth, async (req, res) => {
	try {
		//Get access to the home page of the user
		await User.findById(req.user.id, (err, user) => {
			res.status(200).json(user);
		}).select('-password').select('-salt');
	} catch (e) {
		console.log(e.message);
		res.status(500).send('Server error');
	}
});

router.post('/logout', (req, res) => {
	res.status(200).send({message: 'Loged out'});
});

module.exports = router;
