'use strict';

angular.module('craveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dish', {
        url: '/dish/:id',
        templateUrl: 'app/dish/dish.html',
        controller: 'DishCtrl'
      });
  });
