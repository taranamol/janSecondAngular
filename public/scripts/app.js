angular.module('janSecond', ['ngMap'])
    
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.messages = [];

    $scope.message = {};
  
  $scope.createMessage = function() {
      $scope.messages.push($scope.message);
      $scope.message = {};
    };
  }])




;




