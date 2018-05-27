var app = angular.module('dgMovieApp');

function DgMovieController ($scope, MovieSvc) {
  var $ctrl = $scope.$ctrl;

  MovieSvc.getMetadata($ctrl.movie.imdbID).then(function (response) {
    $ctrl.movie = _.assign({}, $ctrl.movie, response.data);
    $ctrl.movie.imdbLink = 'https://www.imdb.com/title/' + $ctrl.movie.imdbID;
    $ctrl.movie.localImage = 'content/images/' + _.split($ctrl.movie.Poster, '/')[5];
  });

}

app.component('dgMovie',
 {
    templateUrl: 'templates/dgMovie.html',
    controller: DgMovieController,
    bindings: {
      movie: '<'
    }
 }
);
