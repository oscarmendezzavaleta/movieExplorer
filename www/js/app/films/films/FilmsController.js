angular.module('FilmsModule')

.controller('FilmsController',function($scope,Film){
//   var initView =function(){
      var film1=Film.build({"Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron",
      "Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane, Kathy Bates",
      "Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish",
      "Country":"USA","Awards":"Won 11 Oscarqs. Another 110 wins & 74 nominations.",
      "Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
      "Ratings":[{"Source":"Internet Movie Database","Value":"7.7/10"},{"Source":"Rotten Tomatoes","Value":"88%"},{"Source":"Metacritic","Value":"74/100"}],
      "Metascore":"74","imdbRating":"7.7","imdbVotes":"838,917","imdbID":"tt0120338","Type":"movie","DVD":"10 Sep 2012","BoxOffice":"N/A","Production":"Paramount Pictures",
      "Website":"http://www.titanicmovie.com/","Response":"True"});

      var film2=Film.build({"Title":"Tierra de lobos","Year":"2010–2014","Rated":"N/A","Released":"29 Sep 2010","Runtime":"75 min","Genre":"Action, Adventure, Drama",
      "Director":"N/A","Writer":"Juan Carlos Cueto, Rocío Martínez Llano","Actors":"María Castro, Antonio Velázquez, Dafne Fernández, Carla Díaz",
      "Plot":"Tierra de Lobos is a western set in 19th century Spain. Translated as Land of Wolves, it's actually named after Anotonio Lobo, the wealthy landowner who controls and owns most of the land. ...",
      "Language":"Spanish","Country":"Spain","Awards":"7 nominations.",
      "Poster":"http://ia.media-imdb.com/images/M/MV5BOWIzMWY0ZDMtYTE1OC00YTcwLWI2MDctOTk4OTBjZDViMWQ5XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
      "Ratings":[{"Source":"Internet Movie Database","Value":"7.3/10"}],"Metascore":"N/A","imdbRating":"7.3","imdbVotes":"279","imdbID":"tt1698445","Type":"series","totalSeasons":"3",
      "Response":"True"});

      $scope.films=[film1,film2];
  //};
//   $scope.$ion('$ionicView.loaded',function(){
//       initView();
//   });
});