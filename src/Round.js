const Turn = require('../src/Turn');

class Round {
  constructor(deck, game) {
    this.deck = deck.cards;
    this.currentCard = this.deck[0];
    this.turns = 0;
    this.roundCOunter = 0;
    this.incorrectGuesses = [];
    this.game = game;
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

  endRound() {
    this.roundCounter++;
    if (this.calculatePercentCorrect() >  85) {
      console.log (`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
    } else {
      console.log(`**Round over!** You answered ${this.calculatePercentCorrect()}% of the questions correctly.  Try again for a better score.`)
      this.game.start();
    }
  }

}

module.exports = Round;