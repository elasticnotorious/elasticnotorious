'use strict';

angular.module('craveApp')
.factory('SearchFactory', function ($http) {

  var getFunction = function(callback){
    $http({
      method: 'GET', 
      url: 'https://api.parse.com/1/classes/dish',
      headers: {
        'X-Parse-REST-API-Key': '2My02jc6sYRjSBHA8xiKxM3fjL5htIo8D7E8hgKK',
        'X-Parse-Application-Id': 'BwN0ekIDkYFRTqDlQLEuGT5Dra19III55M4FdYzq'
      }
    }).success(function(data, status){
      console.log('data', data, 'status', status);
      console.log(data.results[0].dish);
      callback = data.results;
      return callback;
    }).error(function(data, status){
      console.log('Error', data, 'Status', status);
    });
  }

  return {
    getFunction: getFunction
  };

});
