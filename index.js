const express = require('express');
const cors = require('cors');

var app = express();

// Add headers
app.use(cors());

// Serve static files
app.use(express.static('public', {
  etag: false
}));

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Listening to port: ' + port);
});