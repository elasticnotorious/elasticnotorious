'use strict';

angular.module('craveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dish', {
        url: '/dish/:id',
        templateUrl: 'app/dish/dish.html',//may have to change later
        controller: 'DishCtrl'//may have to change later
      });
  });

