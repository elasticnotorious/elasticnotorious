'use strict';

angular.module('craveApp')
  .factory('DishFactory', function ($q, $http, $stateParams) {
  	var getFunction = function(){
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: '/api/dish/' + $stateParams.id,
    }).success(function(info, status){
      // console.log('info', info, 'status', status);
      deferred.resolve(info);
      // return info;
    }).error(function(info, status){
      console.error('GET Request fails with the following...',  info, status)
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
