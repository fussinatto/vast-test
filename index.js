const express = require('express');
var app = express();

// Add headers
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://developer.jwplayer.com");
    
    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

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