'use strict';

angular.module('craveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/signin/signin.html',//may have to change later
        controller: 'SignInCtrl'//may have to change later
      });
  });
