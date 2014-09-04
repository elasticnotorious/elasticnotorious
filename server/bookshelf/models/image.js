var db = require('../config');

var Image = db.Model.extend({
  tableName: 'dish_images',
  hasTimestamps: true,

});

module.exports = Image;
