const mongoose = require('./connection');
const seedData = require('../seed');
const Question = require('../models/Question');

Question.deleteMany({})
	.then(() => {
		Question.insertMany(seedData).then((question) => {
			console.log('We have Questions!');
			console.log(question);
			process.exit();
		});
	})
	.catch((err) => console.error(err));
