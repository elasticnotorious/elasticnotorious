'use strict';

angular.module('craveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('createdish', {
        url: '/createdish',
        templateUrl: 'app/createdish/createdish.html',//may have to change later
        controller: 'CreateDishCtrl'//may have to change later
      });
  });
