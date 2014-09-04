'use strict';

angular.module('craveApp')
  .controller('SearchCtrl', ['$scope', 'SearchFactory', function ($scope, SearchFactory) {
    $scope.test = 'Hello World!';
    // $scope.data = {results: [
    //   {dish: 'TEST'},
    //   {dish: 'TEST2'}
    //   ]};
    $scope.data = [];
    $scope.requestFunction = function(){
      //$route.reload();
      console.log($scope.data);
      SearchFactory.getFunction($scope.data).(function(data){
        $scope.data = data;
        console.log('temp-data', data);
      });
      console.log(temp);
      return temp;
      //refresh();
    }

    $scope.$watch('data', function() {
      $scope.data = $scope.data;
      //$scope.data
    });
    var refresh = function(){
      $scope.$apply();
    }
  }]);
