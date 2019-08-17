const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    console.log('nova conecão', socket.id)

})


mongoose.connect('mongodb+srv://lucca:lucca@cluster0-bmjng.mongodb.net/tindev?retryWrites=true&w=majority',
{useNewUrlParser: true});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);

