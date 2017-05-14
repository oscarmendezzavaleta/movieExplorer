angular.module('FilmsModule')


.controller('FilmsDetailsController',function($scope,Film,film){

 //  console.log(films);
      $scope.films = film;
   
  });