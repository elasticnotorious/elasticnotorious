'use strict';

angular.module('craveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dish', {
        url: '/dish',
        templateUrl: 'app/dish/dish.html',//may have to change later
        controller: 'DishCtrl'//may have to change later
      });
  });

var RatingCtrl = function ($scope) {
  $scope.rate = 7;
  $scope.max = 5;
  $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
};
