'use strict';

/* App Module */

var ustadiumWeb = angular.module('ustadiumWeb', [
  'ngRoute',
  'ustadiumWebControllers',
  'ustadiumWebServices',
  'ngSanitize',
  'ustadiumWeb'
]);

ustadiumWeb.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
      // use the HTML5 History API
      $locationProvider.html5Mode(true);

      $routeProvider.
        when('/', {
            templateUrl: 'partials/message-list.html',
            controller: 'ActivityCtrl'
        }).
        when('/:messageID', {
          templateUrl: 'partials/message-detail.html',
          controller: 'MessageDetailCtrl'
        }).
        when('/contests', {
            templateUrl: 'partials/contests.html',
            controller: 'ContestsCtrl'
        }).
        otherwise({
            redirectTo: '/'
        });
  }]);