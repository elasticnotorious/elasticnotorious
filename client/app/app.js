'use strict';

angular.module('craveApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });

  // $stateProvider
  //   .state('home', {
  //     url: '/',
  //     templateUrl: 'main/main.html'
  //   })

  //   .state('dish', {
  //     url: '/dish',
  //     templateUrl: 'dish/dish.html'
  //   })

  //   .state('search', {
  //     url: '/search',
  //     templateUrl: 'search/search.html'
  //   })

  //   .state('createdish', {
  //     url: '/createdish',
  //     templateUrl: 'createdish/createdish.html'
  //   })