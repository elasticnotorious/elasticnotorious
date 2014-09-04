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

  if (req.method === 'GET') {

    findImage({id: req.params.id}, function(err, image) {

      if (err) {

        console.log(err);
        res.send(400, err);

      } else if (image) {

        res.send(201, image);

      } else {

        res.send(404, "image not found");

      }
    });

  } else if (req.method === 'POST') {
    var hash       = crypto.createHash('md5').update((new Date).toString()).digest('hex');
    var uploadname = __dirname + '/../../upload/' + hash;
    var fieldReady = false;
    var fileReady = false;
    var fstream;

    req.pipe(req.busboy);
  
    req.busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated) {
      console.log('Field [' + fieldname + ']: value: ' + val);
      req.params.id = val;
      fieldReady = true;
      console.log("done getting field");
    });

    req.busboy.on('file', function (fieldname, file, filename) {
      console.log("Uploading: " + filename); 
      console.log("Uploading to: " + uploadname); 

      fstream = fs.createWriteStream(uploadname);


      file.pipe(fstream);

      fstream.on('close', function () {
        fileReady = true;
        console.log("done getting file");
      });


    });


  var waitId;
  var wait = function() {
    console.log("in wait");

    // wait for field and file
    if (fieldReady && fileReady) {
      console.log("saving image");
      saveImage(req, res, uploadname);
    } else {
      console.log("rewaiting");
      waitId = setTimeout(wait, 100);
    }
  };

  console.log("wait call");
  wait();
  console.log("end wait call");

  } else {

    // return 501 not implemented
    res.send(501); 
  }
};




var saveImage = function(req, res, fromFilename) {
  //console.log("filaname: ", filename);
  //var fromFilename = path.normalize(filename);
  console.log("reading file: ", fromFilename);

  fs.readFile(fromFilename, function (err, data) {
    if (err) throw err;
    var hash = crypto.createHash('md5').update(data).digest('hex');
    var newfilename = path.normalize(__dirname+'../../../images/'+hash);

    fs.rename(fromFilename, newfilename, function(err) {
      if (err) throw err;

      console.log("renamed file");

    });
  });
  //   var Image = new Image(data);
  //   Image.save()
  //   .then(function(found) {

  //   // not sure this is supposed to be here
  //   Images.add(found);
  //   res.send(201, found);
  // })
  // .otherwise(function(err) {
    
  //   console.log(err);
  //   res.send(400);
  // });
};

// we don't want to save the same image multiple times,
// so we store a hash of the image with it, and when 
// we
var findImage = function(data, callback) {
  //var hash = crypto.createHash('md5').update(data).digest('hex');

  new Image(data)
  .fetch()
  .then(function(found) {

    Images.add(found);
    callback(null, found);

  })
  .otherwise(function(err) {

    callback(err, null);

  });
};

