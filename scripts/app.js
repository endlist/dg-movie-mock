var dgMovieApp = angular.module('dgMovieApp', []);

function DgMovieController () {
}

dgMovieApp.component('dgMovie',
 {
  templateUrl: 'dgMovie.html',
  controller: DgMovieController,
  bindings: {
    movie: '='
  }
 }
);
