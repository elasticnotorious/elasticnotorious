/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

// Setup server
var app = express();
var server = require('http').createServer(app);

// for image uploading
var busboy = require('connect-busboy');
app.use(busboy()); 


require('./config/express')(app);
require('./routes')(app);

var fs = require('fs');
var busboy = require('connect-busboy');
//...
//app.use(busboy()); 

var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mutlipart = require('multipart');
//...
app.use(bodyParser({ uploadDir: path.join(__dirname, 'upload'), keepExtensions: true, extended: true })); 
//app.use(multipart.multipart()); 

console.log(path.join(__dirname, 'files'));

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;











//...
