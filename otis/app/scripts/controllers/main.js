'use strict';

angular.module('otisApp')
  .controller('MainCtrl', function ($scope, Tasks) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.Tasks = Tasks;
  });
