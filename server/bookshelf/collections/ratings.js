var db = require('../config');
var Rating = require('../models/rating');

var Ratings = new db.Collection();
// var Dishes = db.Collection.extend({
//   tableName: 'dishes',
//   hasTimestamps: true,
// });

Ratings.model = Rating;

module.exports = Ratings;
