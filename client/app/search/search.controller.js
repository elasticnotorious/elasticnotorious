'use strict';

angular.module('craveApp')
  .controller('SearchCtrl', ['$scope', 'SearchFactory', function ($scope, SearchFactory) {
    $scope.test = 'Hello World!';
    // $scope.data = {results: [
    //   {dish: 'TEST'},
    //   {dish: 'TEST2'}
    //   ]};
    // $scope.data = [];
      $scope.data = {};

    $scope.requestFunction = function() {
    }
     SearchFactory.getFunction().then(function(data){
        // console.log(data);
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
