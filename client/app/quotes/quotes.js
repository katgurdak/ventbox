angular.module('ventbox.quotes', [])

.controller('QuotesController', function($scope, $location, Quotes) {
	$scope.randomQuote = Quotes.getRandomQuote();
  $scope.ventMore = function() {
  	$location.path('vent');
  };
})

.factory('Quotes', function() {
  var quotes = ['“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ~Anne Frank', '“Start where you are. Use what you have. Do what you can.” ~Arthur Ashe'];
  var getRandomQuote = function() {
  	return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return {
  	getRandomQuote: getRandomQuote
  }
});