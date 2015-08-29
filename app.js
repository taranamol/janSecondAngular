angular.module('janSecond', [])
    
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.posts = [];

    $scope.post = {};
  
    $http.get('/')
      .then(function(response) {
        $scope.posts = response.data;
      });

      $scope.createPost = function() {
        $http.post('/', $scope.post)
          .then(function(response) {
            var newPost = response.data;
            $scope.post = {};
            $scope.post.push(newPost);
          });
      };
  }])


;




