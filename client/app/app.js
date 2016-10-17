angular.module('ventbox', [
  'ventbox.vent',
  'ventbox.quotes',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/quotes', {
    	templateUrl: 'app/quotes/quotes.html',
    	controller: 'QuotesController'
    })
    .when('/vent', {
    	templateUrl: 'app/vent/vent.html',
    	controller: 'VentController'
    })
    .otherwise({
    	redirectTo: '/'
    });
});