/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /dish              ->  index
 * POST    /dish              ->  create
 * GET     /dish/:id          ->  show
 * PUT     /dish/:id          ->  update
 * DELETE  /dish/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');

// Get list of things
exports.index = function(req, res) {

  if (req.method === 'GET') {

    res.json([{
      "id": "1",      
      "name": "Chicken Vindaloo",       
      "rating": 3,     
      "restaurant_id": "1",
    }]);

  } else if (req.method === 'POST') {

    // get JSON object from request
    // add to database
    // return 201 on success
    // return URL to get entity with as Location field
    // on failure, return 400
    res.send(501); 

  } else {

    // return 501 not implemented
    res.send(501); 
  }
};