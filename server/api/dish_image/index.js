'use strict';

var express = require('express');
var controller = require('./dish_image.controller');

var router = express.Router();

router.post('/', controller.index);

module.exports = router;