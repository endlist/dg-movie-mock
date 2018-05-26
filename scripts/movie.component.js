var app = angular.module('dgMovieApp');

function DgMovieController () {
  alert('hello');
}

app.component('dgMovie',
 {
    templateUrl: 'templates/dgMovie.html',
    controller: DgMovieController,
    bindings: {
      movie: '='
    }
 }
);
