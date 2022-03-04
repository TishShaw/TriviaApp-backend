const express = require('express');

const router = express.Router();

const Question = require('../models/Question');

// Index: GET all the questions
router.get('/', async (req, res, next) => {
    try {
        const questions = await Question.find({});
		res.json(questions);
    } catch (error) {
        next(error);
    }
})

module.exports = router;