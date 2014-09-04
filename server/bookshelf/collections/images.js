var db = require('../config');
var Image = require('../models/image');

var Images = new db.Collection();

Images.model = Image;

module.exports = Images;
