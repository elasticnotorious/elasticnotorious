/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /dish              ->  index
 * POST    /dish              ->  create
 * GET     /dish/:id          ->  show
 * PUT     /dish/:id          ->  update
 * DELETE  /dish/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Images = require('../../bookshelf/collections/images');
var Image = require('../../bookshelf/models/image');
var fs = require('fs');
var crypto = require('crypto');
var busboy = require('connect-busboy');
var path = require('path');


// Get list of things
exports.index = function(req, res) {

 if (req.method === 'POST') {
  var hash       = crypto.createHash('md5').update((new Date).toString()).digest('hex');
  var uploadname = __dirname + '/../../upload/' + hash;
  var fieldReady = false;
  var fileReady  = false;
  var fstream;

  req.pipe(req.busboy);
  
  req.busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
    req.params.id = val;
    fieldReady = true;
  });

  req.busboy.on('file', function (fieldname, file, filename) {

    fstream = fs.createWriteStream(uploadname);
    file.pipe(fstream);

    fstream.on('close', function () {
      fileReady = true;
      console.log("done getting file");
    });
  });

  // we have no choice but to wait until the filed with the 
  // dish id has been processed, as well as the file uploaded
  var waitId;
  var wait = function() {

    // wait for field and file
    if (fieldReady && fileReady) {
      saveImage(req, res, uploadname);
    } else {
      waitId = setTimeout(wait, 100);
    }
  };

  wait();

} else {

    // return 501 not implemented
    res.send(501); 
  }
};

var saveImage = function(req, res, fromFilename) {

  fs.readFile(fromFilename, function (err, data) {
    if (err) throw err;
    var hash = crypto.createHash('md5').update(data).digest('hex');
    var newfilename = path.normalize(__dirname+'../../../images/'+hash);

    fs.rename(fromFilename, newfilename, function(err) {
      if (err) throw err;

      var data = {dish_id: req.params.id, pathname: '/images/'+hash, hash: hash};
      console.log(data);
      var image = new Image(data);
      image.save()
      .then(function(found) {

        // not sure this is supposed to be here
        Images.add(found);
        res.send(201, found);
      })
      .otherwise(function(err) {

        console.log(err);
        res.send(400);
      });
    });
  });
  
};


