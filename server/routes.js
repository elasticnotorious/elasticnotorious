/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  //app.use('/api/things', require('./api/thing'));
  
  app.use('/api/dish', require('./api/dish'));
  app.use('/api/dishes', require('./api/dishes'));
  app.use('/api/rating', require('./api/rating'));
  

  // All undefined asset or api routes should return a 404
  //app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  // .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      console.log("default route");
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
