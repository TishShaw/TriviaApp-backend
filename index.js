const express = require('express');
const app = express();
const cors = require('cors');

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

app.set('port', process.env.PORT || 5000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('/public/script.js'));



io.on('connection', (socket) => {
	socket.on('user_joined', (name) => {
		console.log(name, 'is now connected');
	});

	socket.on('disconnect', () => {
		console.log(socket.id, 'user disconnected');
	});
});


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/questions', (req, res) => {
	res.redirect('/api/questions');
});



const questionsController = require('./controllers/QuestionsController');
app.use('/api/questions/', questionsController);



server.listen(3000, () => {
	console.log('listening on *:3000');
});

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
