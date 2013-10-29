'use strict';

angular.module('otisApp')
  .controller('UsersCtrl', function ($scope, $routeParams, Users) {
        $scope.Users = Users;
        $scope.User = Users[$routeParams.Id - 1];
  });
