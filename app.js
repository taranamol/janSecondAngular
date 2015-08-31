angular.module('janSecond', ['ngMap'])
    
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

    $scope.posts = [];

    $scope.post = {};
  
  $scope.createPost = function() {
      $scope.posts.push($scope.post);
      $scope.post = {};
    };
  }])

  .directive('currentWeather', function() {
  return {
    restrict: 'AE',
    //how can you use this in the html - depends on how it is put in the html. 
    //if it was "a" or "ae" - then it have to be be in a div
    scope: {
      city: '@'
    },
    //our directive has it's own directive - it's an isolated scope
    //the @ sign means we can get the value of the string outside & use it
    
    template: '<div class="current-weather"><h4>Weather for {{city}}</h4>{{weather.main.temp}}</div>',
    //how the text is displaying on the page

    // templateUrl: 'templates/current-weather-template.html',
    //transclude: true,
    controller: ['$scope', '$http',
      function ($scope, $http) {
        var url = "http://api.openweathermap.org/data/2.5/weather?mode=json&cnt=7&units=imperial&callback=JSON_CALLBACK&q="
        $scope.getWeather = function(city) {
          //has a function of getweather
          $http({ method: 'JSONP', url: url + city })
            .success(function(data) {
              $scope.weather = data;
               console.log(data);
            });
        }
    }],
    link: function (scope, element, attrs) {
      scope.weather = scope.getWeather(attrs.city);
      //bringing it all together - connecting the getweather & with template, etc.
    }
  }
});


;




