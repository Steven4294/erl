const express = require('express')
const app = express()
const port = 3000
const favicon = require('serve-favicon');
const path = require('path');

app.use(express.static(__dirname + '/public'));

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.get('/',function(req,res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || port);
