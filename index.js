const express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// Serve static files
app.use(express.static('public', {
  etag: false
}));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Listening to port: ' + port);
});