angular.module('janSecond', ['ngMap'])
    
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.allMessages = janSecondAngular.query();

    $scope.message = {};
  
  $scope.createMessage = function() {
      $scope.allMessages.push($scope.message);
      $scope.message = {};
    };
  }])




;




