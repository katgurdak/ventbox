angular.module('ventbox', [
  'ventbox.start',
  'ventbox.vent',
  'ventbox.quotes',
  'ngRoute'
])
.config(function($routeProvider) {
  $routeProvider
    .when('/start', {
      templateUrl: 'app/start/start.html',
      controller: 'StartController'
    })
    .when('/quotes', {
    	templateUrl: 'app/quotes/quotes.html',
    	controller: 'QuotesController'
    })
    .when('/vent', {
    	templateUrl: 'app/vent/vent.html',
    	controller: 'VentController'
    })
    .otherwise({
    	redirectTo: '/start'
    });
});