var Bookshelf = require('bookshelf');
var path = require('path');

var db = Bookshelf.initialize({
  client: 'sqlite3',
  connection: {
    host: '127.0.0.1',
    user: 'admin',
    password: 'admin',
    database: '',
    charset: 'utf8',
    filename: path.join(__dirname, '../../db/crave.sqlite')
  }
});

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function(user) {
      user.increments('id').primary();
      user.string('username', 255);
      user.string('password', 255);
      user.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('restaurants').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('restaurants', function (r) {
      r.increments('id').primary();
      r.string('name', 255);
      r.string('address', 255);
      r.integer('phone', 10);
      r.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('dishes').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('dishes', function (d) {
      d.increments('id').primary();
      d.string('name', 255);
      d.integer('rating', 1);
      d.integer('restaurant_id');
      d.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('ratings').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('ratings', function (d) {
      d.increments('id').primary();
      d.integer('rating', 1);
      d.integer('dish_id');
      d.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

db.knex.schema.hasTable('dish_images').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('dish_images', function (d) {
      d.increments('id').primary();
      d.string('pathname', 255);
      d.string('hash', 255);
      d.integer('dish_id');
      d.integer('votes');
      d.timestamps();
    }).then(function (table) {
      console.log('Created Table', table);
    });
  }
});

/************************************************************/
// Add additional schema definitions below
/************************************************************/


module.exports = db;
