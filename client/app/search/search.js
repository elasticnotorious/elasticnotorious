'use strict';

angular.module('craveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/search/search.html',//may have to change later
        controller: 'SearchCtrl'//may have to change later
      });
  });
