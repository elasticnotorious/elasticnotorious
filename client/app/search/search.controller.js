'use strict';

angular.module('craveApp')
  .controller('SearchCtrl', ['$scope', 'SearchFactory', function ($scope, SearchFactory) {
    $scope.test = 'Hello World!';
    // $scope.data = {results: [
    //   {dish: 'TEST'},
    //   {dish: 'TEST2'}
    //   ]};
    $scope.data = [];
    $scope.requestFunction = function() {
      console.log(SearchFactory);
    }
    var promise = SearchFactory.getFunction();
    promise.then(function(data){
      console.log(data);
      $scope.data = data;
    })
    // $scope.$watch('data', function() {
    //   $scope.data = $scope.data;
    //   //$scope.data
    // });
    // var refresh = function(){
    //   $scope.$apply();
    // }
  }]);
