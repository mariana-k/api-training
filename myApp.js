require('dotenv').config();
let express = require('express');
let app = express();

app.get('/', (req, res) => {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', (req, res) => {
    const text = 'Hello json';
    const message = process.env.MESSAGE_STYLE === 'uppercase' ? text.toUpperCase() : text;
    res.json({"message": message});
});

































 module.exports = app;
