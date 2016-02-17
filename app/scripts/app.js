'use strict';

/**
 * @ngdoc overview
 * @name miPromoApp
 * @description
 * # miPromoApp
 *
 * Main module of the application.
 */
angular
  .module('miPromoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    // 'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider, $mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'img/icons/sets/social-icons.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .directive( 'goClick', function ( $location ) {
    return function ( scope, element, attrs ) {
      var path;

      attrs.$observe( 'goClick', function (val) {
        path = val;
      });

      element.bind( 'click', function () {
        scope.$apply( function () {
          $location.path( path );
        });
      });
    };
  });
