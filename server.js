const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

app.use(express.static('public'));

const options = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem'),
};

app.use((req, res, next) => {
  res.send('<h1>HTTPS is working!</h1>');
});

const port = 3000;

https.createServer(options, app).listen(port, () => {
  console.log('Server listening on port ' + port);
})