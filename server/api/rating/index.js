'use strict';

var express = require('express');
var controller = require('./rating.controller');

var router = express.Router();

router.get('/:id', controller.index);
router.post('/', controller.index);

module.exports = router;