'use strict';

angular.module('craveApp')
.factory('SearchFactory', function ($q, $http) {
  var getFunction = function(callback){
    var deferred = $q.defer();
    // console.log(deferred);
    $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/dish',
      headers: {
        'X-Parse-REST-API-Key': '2My02jc6sYRjSBHA8xiKxM3fjL5htIo8D7E8hgKK',
        'X-Parse-Application-Id': 'BwN0ekIDkYFRTqDlQLEuGT5Dra19III55M4FdYzq'
      }
    }).success(function(info, status){
      deferred.resolve(info.results);
      return info.results;
    }).error(function(info, status){
      deferred.reject('Error', info, 'Status', status);
      // console.log('Error', info, 'Status', status);
    });
    return deferred.promise;
  }

  return {
    getFunction: getFunction,
    // data: data,
  };
});
