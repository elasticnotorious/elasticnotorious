'use strict';

angular.module('craveApp')
  .factory('CreateDishFactory', function ($http, $q) {


  	var save = function(data) {
  		var rdata = { name: data.restaurant_name, address: data.resturant_address};
  		$http({
  			method: "POST",
  			url: 'api/restaurant',
  			data: rdata
  		})
  		.then(function(results) {

  			var tmp = {name: data.dish_name, restaurant_id: results.data.id, rating: data.rating};
	  		$http({
	  			method: "POST",
	  			url: 'api/dish',
	  			data: tmp
	  		})
	  		.then(function(results) {
  				console.log(results.data);
  			});

  		})
		}

  	return {
  		save: save,
  	}

  });
