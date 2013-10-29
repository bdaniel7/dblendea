'use strict';

//angular.module('otisApp')
//  .directive('loadingbar', function () {
//    return {
//      template: '<div></div>',
//      restrict: 'E',
//      link: function postLink(scope, element, attrs) {
//        element.text('this is the loadingbar directive');
//      }
//    };
//  });

var directives = angular.module('otisApp');
directives.directive('loadingbar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                element.addClass('hide');
                $rootScope.$on('$routeChangeStart', function() {
                    element.removeClass('hide');
                });
                $rootScope.$on('$routeChangeSuccess', function() {
                    element.addClass('hide');
                });
            }
        };
    }]);
directives.directive('focus',
    function() {
        return {
            link: function(scope, element, attrs) {
                element[0].focus();
            }
        };
    });