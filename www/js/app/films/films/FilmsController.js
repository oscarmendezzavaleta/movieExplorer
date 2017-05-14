angular.module('FilmsModule')

  .controller('FilmsController', function ($scope, Film, films) {

    
      $scope.films = films;
    
  });