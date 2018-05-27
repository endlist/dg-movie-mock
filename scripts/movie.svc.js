var app = angular.module('dgMovieApp');
var apiKey = 'c2312eff'; // TODO: move to system var

app.service('MovieSvc', function ($http) {
  return {
    getApi: function () {
      return '&apikey=' + apiKey;
    },
    getMovies: function (decade) {
      return $http.get('http://www.omdbapi.com/?s=Batman' + this.getApi());
    },
    getMetadata: function (id) {
      return $http.get('http://www.omdbapi.com/?i=' + id + this.getApi());
    }
  }
});
