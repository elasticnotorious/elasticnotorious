/*
 *
 * Using Rails-like standard naming convention for endpoints.
 * GET     /dishes              ->  index
 * POST    /dishes              ->  create
 * GET     /dishes/:id          ->  show
 * PUT     /dishes/:id          ->  update
 * DELETE  /dishes/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var app = require('../../app');
var Restaurants = require('../../bookshelf/collections/restaurants');
var Restaurant = require('../../bookshelf/models/restaurant');
//var name = $ <-- will need once we have  view setup

// Get list of things
exports.index = function(req, res) {
  findRestaurant(req, function(){
    $http({
      method: 'GET',
      url: app.locuURL + 'name=',
      headers: {
        'api_key': app.locuAPI,
      }  //need input from text box
    }).success(function(data, status, headers, config){
      console.log('successful GET to API, saving data to server');
      new Restaurant(data).save().then(function(found){
        Restaurants.add(found);
        res.send(201, found);
      });
    }).error(function(data, status, headers, config){
      console.error('GET request fails, heres the data...', data);
    });
  });

};

var saveRestaurant = function(req, res, data) {

  var restaurant = new Restaurant(data);
  restaurant.save()
  .then(function(found) {

    // not sure this is supposed to be here
    Restaurants.add(found);
    res.send(201, found);
  })
  .otherwise(function(err) {

    console.log(err);
    res.send(400);
  });
};


var findRestaurant = function(data, callback) {

  new Restaurant(data)
  .fetch()
  .then(function(found) {

    Restaurants.add(found);
    callback(null, found);

  })
  .otherwise(function(err) {

    callback(err, null);

  });
};
