var cards = [
    {
        rank : "queen",
        suit : "hearts",
        cardImage : "images/queen-of-hearts.png"
    },
    {
        rank : "queen",
        suit : "diamonds",
        cardImage : "images/queen-of-diamonds.png"
    },
    {
        rank : "king",
        suit : "hearts",
        cardImage : "images/king-of-hearts.png"
    },
    {
        rank : "king",
        suit : "diamonds",
        cardImage : "images/king-of-diamonds.png"
    }

];
var cardsInPlay = [];
var score = 0;

var updateScore = function() {
    document.getElementById('score').innerHTML = score;
}

var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
}

var reset = function() {
    document.getElementById('game-board').innerHTML = "";
    createBoard();
};

document.getElementById('reset-button').addEventListener('click', reset);

var checkForMatch = function() {

    if(cardsInPlay.length === 2) {
        if(cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
            score += 1;
            updateScore();
            cardsInPlay = [];
        } else {
            alert("Sorry, try again.");
            cardsInPlay = [];
            reset();
        }
    }
};

var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    this.setAttribute('src', cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    checkForMatch();


};

createBoard();
