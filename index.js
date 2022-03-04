const express = require('express');
const cors = require('cors');
const app = express();
app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
	res.redirect('/api/questions');
});

const questionsController = require('./controllers/QuestionsController');
app.use('/api/questions/', questionsController);


app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});