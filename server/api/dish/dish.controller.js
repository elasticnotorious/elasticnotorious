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
var Dishes = require('../../bookshelf/collections/dishes');
var Dish = require('../../bookshelf/models/dish');

// Get list of things
exports.index = function(req, res) {

  if (req.method === 'GET') {
    findDish({id: req.params.id}, function(err, dish) {

      if (err) {

        console.log(err);
        res.send(400, err);

      } else if (dish) {

        res.send(201, dish);

      } else {

        res.send(404, "dish not found");

      }
    });

  } else if (req.method === 'POST') {

    findDish(req.body, function(err, dish) {

      if (err) {

        console.log(err);
        res.send(400, err);

      } else if (dish) {

        res.send(302, "dish already exists");

      } else {
        
        saveDish(req, res, req.body);
      }
    });

  } else {
    
    // return 501 not implemented
    res.send(501); 
  }
};

var saveDish = function(req, res, data) {

  var dish = new Dish(data);
  dish.save()
  .then(function(found) {

    // not sure this is supposed to be here
    Dishes.add(found);
    res.send(201, found);
  })
  .otherwise(function(err) {
    
    console.log(err);
    res.send(400);
  });
};

var findDish = function(data, callback) {
console.log('in the dish server');

  new Dish(data)
  .fetch()
  .then(function(found) {

    Dishes.add(found);
    callback(null, found);

  })
  .otherwise(function(err) {

    callback(err, null);

  });
};

