'use strict';

angular.module('otisApp')
  .controller('TasksCtrl', ['$scope', '$routeParams', 'Tasks', function ($scope, $routeParams, Tasks) {
    $scope.Tasks = Tasks;
    $scope.Task = Tasks[$routeParams.Id-1];
  }])
  .controller('StoriesCtrl', ['$scope', '$routeParams', 'Stories', function ($scope, $routeParams, Stories) {
    $scope.Stories = Stories;
  }])
;

//angular.module('otisApp')
//    .controller('TaskDetailsCtrl', function ($scope, $routeParams, Tasks) {
//        $scope.Task = $scope.Tasks[$routeParams.Id-1];
//});
