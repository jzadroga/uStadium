var ustadiumWebControllers = angular.module('ustadiumWebControllers', []);

ustadiumWebControllers.controller('mainCtrl', function ($scope, $rootScope, $location) {
    $scope.menu = [
      { label: 'Home', route: '/' },
      { label: 'About', route: '/about' },
      { label: 'Contact', route: '/contact' }
    ]

    $scope.menuActive = '/';

    $rootScope.$on('$routeChangeSuccess', function (e, curr, prev) {
        $scope.menuActive = $location.path();
    });

    $rootScope.showPost = function (ev) {
        $(".panel-message-new").addClass("expanded");
        $(".panel-message-new").find("textarea.new-post").focus();
        $("a.action-new-post").show();
    }
});

ustadiumWebControllers.controller('ActivityCtrl', ['$scope', 'Activity',
  function ($scope, Activity) {
      $scope.activityList = Activity.query(function divData(obj) {
          $scope.chunkedData = chunk(obj, obj.length / 2);
      });
      $scope.orderProp = 'id';

      $scope.showPost = function (ev) {
          $(ev.currentTarget).addClass("expanded");
          $("a.action-new-post").show();
      }

      function chunk(arr, size) {
          var newArr = [];
          for (var i = 0; i < arr.length; i += size) {
              newArr.push(arr.slice(i, i + size));
          }
          return newArr;
      }
  }]);

ustadiumWebControllers.controller('ContestsCtrl', ['$scope',
  function ($scope) {
      $scope.hello = function (name) {
          alert('Hello ' + (name || 'world') + '!');
      }
  }]);