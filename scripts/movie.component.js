var app = angular.module('dgMovieApp');

function DgMovieController () {
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
