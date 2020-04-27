require('dotenv').config();
const express = require('express');
const path = require('path');
const tweet = require('./tweet.js');

const port = process.env.PORT || 2000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('exposed'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/make', function (req, res) {
    res.sendFile(path.join(__dirname + '/make.html'));
});
app.post('/post', function (reqq, ress) {
    var key = reqq.body.key;
    if (key != process.env.key) {
         ress.send("😛");
    }
   else{
     tweet();
    ress.sendFile(path.join(__dirname + '/done.html'));
   }
  });
app.listen(port, () =>
    console.log(`Running on http://localhost:${port}`)
);