'use strict';

angular.module('craveApp')
  .factory('DishFactory', function ($q, $http, $stateParams) {
  	var getFunction = function(){
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: '/api/dish/' + $stateParams.id,
    }).success(function(info, status){
      deferred.resolve(info);
    }).error(function(info, status){
      console.error('GET Request fails with the following...',  info, status);
      deferred.reject('Error', info, 'Status', status);
    });
    return deferred.promise;
  }

  var getPictures = function(){
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: '/api/dish_images?dish_id=' + $stateParams.id
    }).success(function(info, status){
      deferred.resolve(info);
    }).error(function(info, status){
      console.error('GET Request for Dish Image fails with the following...',info, status);
      deferred.reject('Error', info, 'Status', status);
    });
    return deferred.promise;
  }

  return {
    getFunction: getFunction,
    getPictures: getPictures,
  };
});
