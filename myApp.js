let express = require('express');
let app = express();

app.get('/', (req, res) => {
    const absolutePath = __dirname + '/views/index.html';
    res.sendFile(absolutePath);
});

app.use('/public', express.static(__dirname + '/public'));

































 module.exports = app;
