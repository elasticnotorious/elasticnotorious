var db = require('../config');

var Rating = db.Model.extend({
  tableName: 'ratings',
  hasTimestamps: true,

});

module.exports = Rating;
