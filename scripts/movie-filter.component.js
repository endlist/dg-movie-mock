var app = angular.module('dgMovieApp');

function DgMovieFilterController ($scope, MovieSvc) {
  var $ctrl = $scope.$ctrl;

  $ctrl.decadeFilterValue = 2010;

  MovieSvc.setDecade($ctrl.decadeFilterValue);

  $scope.$watch('$ctrl.decadeFilterValue', function (newVal, oldVal) {
    MovieSvc.setDecade(parseInt(newVal));
  });
}

app.component('dgMovieFilter', {
  templateUrl: 'templates/dgMovieFilter.html',
  controller: DgMovieFilterController
});
