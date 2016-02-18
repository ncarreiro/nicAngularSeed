'use strict';

/**
 * @ngdoc function
 * @name miPromoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the miPromoApp
 */
angular.module('miPromoApp')
  .controller('MainCtrl', function ($scope, $filter) {
    $scope.currency = $filter('currency')(16165165);
  });
