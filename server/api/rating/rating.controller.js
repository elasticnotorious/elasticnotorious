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
var Ratings = require('../../bookshelf/collections/ratings');
var Rating = require('../../bookshelf/models/rating');
var db = require('../../bookshelf/config');

// Get list of things
exports.index = function(req, res) {

  if (req.method === 'GET') {

    findRating({id: req.params.id}, function(err, rating) {

      if (err) {

        console.log(err);
        res.send(400, err);

      } else if (rating) {

        res.send(201, rating);

      } else {

        res.send(404, "rating for dish not found");

      }
    });

  } else if (req.method === 'POST') {

    var rating = new Rating(req.body);
    rating.save()
    .then(function(found) {

      // not sure this is supposed to be here
      Ratings.add(found);
      res.send(201, found);
    })
    .otherwise(function(err) {

      console.log(err);
      res.send(400);
    });

  } else {

    // return 501 not implemented
    res.send(501); 
  }
};

var findRating = function(data, callback) {

  db.knex("ratings").avg("rating")
  .then(function(found) {

    //[{"avg(\"rating\")":4}]
    var rating = Math.round(found[0]["avg(\"rating\")"]*10)/10;
    callback(null, rating.toString());

  })
  .otherwise(function(err) {

    callback(err, null);

  });
};

