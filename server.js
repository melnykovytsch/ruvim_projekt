const express = require('express');
const nodemailer = require('nodemailer');

const server = express();

server.use(express.static(__dirname ));
server.use(express.json());

server.get('/', (req, res) => {
    res.sendFile("index.html", {root: __dirname});
})

server.listen(5500, () => {
    console.log('listening on port 5500');
})