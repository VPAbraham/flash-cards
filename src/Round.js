const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.incorrectGuesses = []
  }

  returnCurrentCard() {
    return this.deck[0]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.deck[0])
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
    }
    this.deck.shift();
    return turn.giveFeedback(turn.evaluateGuess());
  }

  calculatePercentCorrect() {
    let accuracy = Math.round(100 - (100 / (this.turns / this.incorrectGuesses.length)))
    return accuracy
  }
  
}

module.exports = Round;