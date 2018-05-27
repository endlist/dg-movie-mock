var app = angular.module('dgMovieApp');

function DgMovieListController ($scope, MovieSvc) {
  var $ctrl = $scope.$ctrl;
  var setMovies = function (movies) {
    $ctrl.movies = movies;
  }

  MovieSvc.getMovies().then(setMovies); // initialize default dataset
  MovieSvc.registerObserverCallback(function () {
    MovieSvc.getMovies().then(setMovies);
  });
}

app.component('dgMovieList',
 {
    templateUrl: 'templates/dgMovieList.html',
    controller: DgMovieListController
 }
);
