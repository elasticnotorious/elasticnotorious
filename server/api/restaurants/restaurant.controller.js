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
var http = require('http');
//var Restaurants = require('../../bookshelf/collections/restaurants');
var Restaurant = require('../../bookshelf/models/restaurant');
var locuAPI = '9a0591d43b82b9b1c8f953d4b896eb2ef9834515';
var locuURL = 'http://api.locu.com/v1_0/venue/search/';
// Get list of things
exports.index = function(req, res) {

  if (req.method === 'GET') {

    console.log("restaurant GET query", req.query);

    findOurRestaurant(req.params, function(err, found) {

      if (!err) {
      // not sure this is supposed to be here
      //Restaurants.add(found);
      res.send(201, found);

      } else {

        console.log(err);
        res.send(400);
      }
    });

  } else if (req.method === 'POST') {

    findOurRestaurant(req.body, function(err, found) {

      if (!found) {

        // should look for it in locu, and save that data,
        // otherwise save what was entered.
        // right now just saves what is entered
        console.log("didn't find restaurant, saving: " , req.body);
        saveRestaurant(req.body, res);

      } else if (found) {

        console.log("found restaurant, not saving: ", found);
        // not sure this is supposed to be here
        //Restaurants.add(found);
        res.send(201, found);

      } else {

        console.log(err);
        res.send(400);
      }
    });

  } else {

    // return 501 not implemented
    res.send(501);
  }
};
  
var findLocuRestaurant = function(name){
  var url = locuURL + 'name='+name;
  console.log(url);
  http.request({
    method: 'GET',
    url: url,
    headers: {
      'api_key': locuAPI,
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
};


var findOurRestaurant = function(data, callback) {

  new Restaurant(data)
  .fetch()
  .then(function(found) {

    //Restaurants.add(found);
    callback(null, found);

  })
  .otherwise(function(err) {

    callback(err, null);

  });
};


var saveRestaurant = function(data, res) {
  var restaurant = new Restaurant(data);
  restaurant.save()
  .then(function(found) {

    // not sure this is supposed to be here
    //Restaurants.add(found);
    res.send(201, found);
  })
  .otherwise(function(err) {

    console.log(err);
    res.send(400);
  });
}
