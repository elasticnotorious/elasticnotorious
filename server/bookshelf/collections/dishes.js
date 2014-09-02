var db = require('../config');
var Dish = require('../models/dish');

var Dishes = new db.Collection();
// var Dishes = db.Collection.extend({
//   tableName: 'dishes',
//   hasTimestamps: true,
// });

Dishes.model = Dish;

module.exports = Dishes;
