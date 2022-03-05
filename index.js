const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http');
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('a user connection');
})

app.set('port', process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));

app.get('/questions', (req, res) => {
	res.redirect('/api/questions');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});


const questionsController = require('./controllers/QuestionsController');
app.use('/api/questions/', questionsController);


server.listen(3000, () => {
    console.log('listening on *:3000');
});

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`);
});