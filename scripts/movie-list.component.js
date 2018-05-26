var app = angular.module('dgMovieApp');

function DgMovieListController () {
}

app.component('dgMovieList',
 {
    templateUrl: 'templates/dgMovieList.html',
    controller: DgMovieListController,
    bindings: {
      movies: '='
    }
 }
);
