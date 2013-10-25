'use strict';

angular.module('otisApp')
  .controller('TasksController', function ($scope, $routeParams, Tasks) {
    $scope.Tasks = Tasks;
    $scope.Task = Tasks[$routeParams.Id-1];
  })
  .controller('StoriesController', function ($scope, $routeParams, Stories) {
    $scope.Stories = Stories;
  })
;

//angular.module('otisApp')
//    .controller('TaskDetailsController', function ($scope, $routeParams, Tasks) {
//        $scope.Task = $scope.Tasks[$routeParams.Id-1];
//});
