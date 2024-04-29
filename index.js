const express = require('express');
const http = require('http');
const router = require('./routes/index');

const app = express();
const server = http.createServer(app);

app.use('/', router);

server.listen(3000, () => {
    console.log('listening on *:3000');
});
