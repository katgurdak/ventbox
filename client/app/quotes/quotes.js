angular.module('ventbox.quotes', [])

.controller('QuotesController', function($scope, $location, Quotes) {
	$scope.randomQuote = Quotes.getRandomQuote();
  $scope.ventMore = function() {
  	$location.path('vent');
  };
})

.factory('Quotes', function() {
  var quotes = ['“How wonderful it is that nobody need wait a single moment before starting to improve the world.” ~Anne Frank',
  '“Start where you are. Use what you have. Do what you can.” ~Arthur Ashe',
  '“When one door closes another door opens; but we so often look so long and so regretfully upon the closed door, that we do not see the ones which open for us.” ~Alexander Graham Bell',
  '“When you get into a tight place and everything goes against you, till it seems as though you could not hang on a minute longer, never give up then, for that is just the place and time that the tide will turn.” ~Harriet Beecher Stowe',
  '“Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.” ~Helen Keller',
  '“It is by going down into the abyss that we recover the treasures of life. Where you stumble, there lies your treasure.” ~Joseph Campbell',
  '“Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.” ~Thomas A. Edison',
  '“Even if you fall on your face, you’re still moving forward.” ~Victor Kiam',
  '“Act as if what you do makes a difference. It does.” ~William James',
  '“Hold on to what is good, even if it’s a handful of earth.” ~Hopi prayer',
  '“Fall seven times, stand up eight.” ~Japanese Proverb',
  '“Be patient with yourself. Self-growth is tender; it’s holy ground. There’s no greater investment.” ~Stephen Covey',
  '“Would you like me to give you a formula for success? It’s quite simple, really. Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, So go ahead and make mistakes. Make all you can. Because remember that’s where you will find success.” ~Thomas J. Watson',
  '“Nobody can go back and start a new beginning, but anyone can start today and make a new ending.” ~Maria Robinson',
  '“All progress takes place outside the comfort zone.” ~Michael John Bobak',
  '“There are moments when troubles enter our lives and we can do nothing to avoid them. But they are there for a reason. Only when we have overcome them will we understand why they were there.” ~Paulo Coelho, The Fifth Mountain',
  '“Don\'t let the muggles get you down.” ~J.K. Rowling, Harry Potter and the Prisoner of Azkaban',
  '“Thankfully, persistence is a great substitute for talent.” ~Steve Martin, Born Standing Up: A Comic\'s Life'];
  var getRandomQuote = function() {
  	return quotes[Math.floor(Math.random() * quotes.length)];
  };

  return {
  	getRandomQuote: getRandomQuote
  }
});