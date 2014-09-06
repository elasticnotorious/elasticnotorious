'use strict';

angular.module('craveApp')
.factory('SearchFactory', function ($q, $http) {
  var getFunction = function(callback){
    var deferred = $q.defer();
    // console.log(deferred);
    $http({
      method: 'GET',
      url: '/api/dishes',
      // headers: {
      //   'X-Parse-REST-API-Key': '2My02jc6sYRjSBHA8xiKxM3fjL5htIo8D7E8hgKK',
      //   'X-Parse-Application-Id': 'BwN0ekIDkYFRTqDlQLEuGT5Dra19III55M4FdYzq'
      // }
    }).success(function(info, status){
      // console.log('info', info, 'status', status);
      deferred.resolve(info);
      // return info;
    }).error(function(info, status){
      // console.error('GET Request fails with the following...',  info, status)
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
