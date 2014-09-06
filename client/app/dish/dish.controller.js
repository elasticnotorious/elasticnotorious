'use strict';

angular.module('craveApp')
  .controller('DishCtrl', ['$scope', 'DishFactory', function ($scope, DishFactory) {
	$scope.data = {};
	DishFactory.getFunction().then(function(data){
	        console.log(data);
	        $scope.data = data;
	        $scope.rate = data.rating;
	        $scope.isReadonly = true;
	        $scope.percent = 100 * (data.rating/5);
	      })

	// var RatingCtrl = function ($scope, data) {
	//   $scope.rate = 7;
	//   $scope.max = 5;
	//   $scope.isReadonly = false;

  // $scope.hoveringOver = function(value) {
  // 	console.log(value);
  //   $scope.overStar = value;
  //   $scope.percent = 100 * (value / 5);
  // };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];



  }]);
