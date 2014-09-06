var db = require('../config');

var Restaurant = db.Model.extend({
  tableName: 'restaurants',
  hasTimestamps: true,

});

module.exports = Restaurant;
