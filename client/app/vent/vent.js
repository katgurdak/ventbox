angular.module('ventbox.vent', [])

.controller('VentController', function($scope, $location) {
  $scope.getQuote = function() {
    $location.path('quotes');
  };
});