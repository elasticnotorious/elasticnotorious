'use strict';

var express = require('express');
var controller = require('./restaurant.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;