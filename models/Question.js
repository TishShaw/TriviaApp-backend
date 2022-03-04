const mongoose = require('../db/connection');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    category: String,
    question: String,
    choices: [subSchema],
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question;