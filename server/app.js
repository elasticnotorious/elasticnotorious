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

// for image uploading
var busboy = require('connect-busboy');
app.use(busboy()); 


require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});


var locuAPI = '9a0591d43b82b9b1c8f953d4b896eb2ef9834515';
var locuURL = 'http://api.locu.com/v1_0/venue/search/';
// ?api_key=' + locuAPI;

// Expose app
exports = module.exports = app;











//...
