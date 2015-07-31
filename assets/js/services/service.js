var ustadiumWebServices = angular.module('ustadiumWebServices', ['ngResource']);

ustadiumWebServices.factory('Activity', ['$resource',
  function ($resource) {
      return $resource('data/messages.json', {}, {
          query: { method: 'GET', isArray: true }
      });
  }]);