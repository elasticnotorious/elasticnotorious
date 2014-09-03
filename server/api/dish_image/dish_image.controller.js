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
    console.log(req);

    // var fstream;
    // req.pipe(req.busboy);
    // req.busboy.on('file', function (fieldname, file, filename) {
    //     console.log("Uploading: " + filename); 
    //     fstream = fs.createWriteStream(__dirname + '/files/' + filename);
    //     file.pipe(fstream);
    //     fstream.on('close', function () {
    //         res.redirect('back');
    //     });
    // });


    //console.log(req);
    // console.log("req.files:", req.files);
    // console.log("dish_id:", req.params.dish_id);
    // var hash     = crypto.createHash('md5').update(req.body.file).digest('hex');
    // var pathname = '/image_archive/'+hash;
    // var filename = path.join(__dirname, pathname);
    // console.log("filename: ", filename);
    // var data     = {dish_id: req.body.id, hash: hash, pathname: pathanme};

    // // save image file in archive with the filename
    // // being the md5 hash of the file so the name of
    // // the file will alway sbe unique
    // fs.writeFile(filename, req.body.file, function(err) {

    //   if (err) {

    //     console.log(err);
    //     res.send(400, err);

    //   } else {
        
    //     res.send(201, found);
    //   }
    // });

  } else {

    // return 501 not implemented
    res.send(501); 
  }
};

var saveImage = function(req, res, data) {

  var Image = new Image(data);
  Image.save()
  .then(function(found) {

    // not sure this is supposed to be here
    Imagees.add(found);
    res.send(201, found);
  })
  .otherwise(function(err) {
    
    console.log(err);
    res.send(400);
  });
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

