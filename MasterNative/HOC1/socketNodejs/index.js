const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);


const port = 3000;

//template engines
app.set('views', './views'); // khai bao thu muc
app.set('view engine', 'pug'); // template

io.on('connection', (socket) => {
    console.log(socket);
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
    console.log('listening on port ' + port);
});