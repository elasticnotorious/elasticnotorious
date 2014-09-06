'use strict';

angular.module('craveApp')
  .controller('DishCtrl', ['$scope', 'DishFactory', function ($scope, DishFactory) {
	$scope.data = {};
  $scope.picture;
	DishFactory.getFunction().then(function(data){
	        console.log(data);
	        $scope.data = data;
	        $scope.rate = data.rating;
	        $scope.isReadonly = true;
	        $scope.percent = 100 * (data.rating/5);
	      })

  DishFactory.getPictures().then(function(data){
    $scope.picture = data[0].pathname;
  })

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];



  }]);
