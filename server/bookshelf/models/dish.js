var db = require('../config');

var Dish = db.Model.extend({
  tableName: 'dishes',
  hasTimestamps: true,

});

module.exports = Dish;
