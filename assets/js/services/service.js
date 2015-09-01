var ustadiumWebServices = angular.module('ustadiumWebServices', ['ngResource']);

ustadiumWebServices.factory('Activity', ['$resource',
  function ($resource) {
      return $resource('data/posts.json', {}, {
          query: { method: 'GET' }
      });
  }]);