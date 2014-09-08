'use strict';

angular.module('craveApp')
  .controller('CreateDishCtrl', ['$scope', 'CreateDishFactory', function ($scope, CreateDishFactory) {
  }]);

  angular.module('craveApp')
    .controller('ExampleController', ['$scope', '$http', '$window', 'CreateDishFactory', function($scope, $http, $window, CreateDishFactory) {
      $scope.master = {};
      $scope.submitted = false;
      $scope.submitting = false;

      $scope.update = function(fields) {

        console.log("FIELDS: ",fields);
        $scope.master = angular.copy(fields);
        $scope.submitted = true;

        if ($scope.createDishForm.$valid) {
          CreateDishFactory.save(fields);
          console.log($scope.createDishForm);
          $scope.data.rating = "";
          $scope.data.restaurant_name = "";
          $scope.data.restaurant_address = "";
          $scope.data.dish_name = "";
        }else {
        	$window.alert('Please fix any validation errors and try again.');
    		}
      };

      $scope.reset = function() {
        $scope.data = angular.copy($scope.master);
      };

      $scope.getResturant = function(name) {
      	console.log(name);
      };

      $scope.reset();
    }]);