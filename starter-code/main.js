console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo) {
	alert("You found a Match");
} else {
	alert("Sorry, try again.");
} */

var board = document.getElementById('game-board');

function createBoard () {
for (var i = 0; i < 4; i += 1) {
var cardElement = document.createElement('div');
cardElement.className = 'card';
board.appendChild(cardElement);
}
}

createBoard();
