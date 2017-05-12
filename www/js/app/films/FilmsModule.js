angular.module('FilmsModule',['FilmModel'])


.config(function($stateProvider) {
  $stateProvider  
  .state('app.films', {
    url: '/films',
     views: {
        'content': {
           templateUrl: 'js/app/films/films/films.html',
           controller:'FilmsController'
         }
       }
  })
   .state('app.films-details', {
    url: '/films-details',
     views: {
        'content': {
           templateUrl: 'js/app/films/filmsDetails/films-details.html',
            controller:'FilmsDetailsController'
         }
       }
  });

});