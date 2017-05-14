angular.module('FilmsModule', ['FilmModel','OMDBFilmsModule'])


  .config(function ($stateProvider) {
    $stateProvider
      .state('app.films', {
        url: '/films',
        views: {
          'content': {
            templateUrl: 'js/app/films/films/films.html',
            controller: 'FilmsController',
              resolve: {
              films: function (FilmsService) {
                return FilmsService.getFilms();
              }
            }
          }
        }
      })
      .state('app.films-details', {
        url: '/detail/:filmTitle',
        views: {
          'content': {
            templateUrl: 'js/app/films/filmsDetails/films-details.html',
            controller: 'FilmsDetailsController',
              resolve: {
              film: function (FilmsService, $stateParams) {
                return FilmsService.getFilm($stateParams.filmTitle);
              }
            }

          }
        }
      })

  });