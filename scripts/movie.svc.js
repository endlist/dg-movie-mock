var app = angular.module('dgMovieApp');
var apiKey = 'c2312eff'; // TODO: move to system var

app.service('MovieSvc', function ($http) {
  var _filters = {
    decade: 0
  };
  var _observerCallbacks = [];

  return {
    setDecade: function (decade) {
      _filters.decade = decade;
      this.notifyObservers();
    },
    registerObserverCallback: function (callback) {
      _observerCallbacks.push(callback);
    },
    notifyObservers: function () {
      _.forEach(_observerCallbacks, function (callback) {
        callback();
      });
    },
    filterResponse: function (response) {
      var filteredData = response.data.Search;

      if (_filters.decade) {
        filteredData = _.filter(response.data.Search, function(movie) {
          var releaseDate = parseInt(movie.Year.slice(0,4));
          return (releaseDate > _filters.decade && releaseDate < _filters.decade + 10);
        });
      }

      return filteredData;
    },
    getApi: function () {
      return '&apikey=' + apiKey;
    },
    getMovies: function () {
      return $http.get('http://www.omdbapi.com/?s=Batman' + this.getApi())
        .then(this.filterResponse)
        .catch(function (error) {
        });
    },
    getMetadata: function (id) {
      return $http.get('http://www.omdbapi.com/?i=' + id + this.getApi());
    }
  }
});
