const express = require('express');

const app = express();

app.use('/dist', express.static(__dirname + '/dist'));
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000,'localhost',() => console.log("running game on http://localhost:3000"));