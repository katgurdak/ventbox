angular.module('ventbox.start', [])

.controller('StartController', function($scope, $location) {
  $scope.goVent = function() {
  	$location.path('vent');
  }
});