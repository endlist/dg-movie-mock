var app = angular.module('dgMovieApp');

function DgMovieListController ($scope, MovieSvc) {
  var $ctrl = $scope.$ctrl;
  MovieSvc.getMovies().then(function(response) {
    $ctrl.movies = response.data.Search;
  });
}

app.component('dgMovieList',
 {
    templateUrl: 'templates/dgMovieList.html',
    controller: DgMovieListController
 }
);
