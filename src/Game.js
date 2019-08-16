const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor() {
    this.roundCount = 0;
    this.currentCards = [];
    this.currentRound;
    this.currentDeck;
  }

  start() {
    this.currentCards = prototypeQuestions.map(card => new Card(card.id, card.question, card.answers, card.correctAnswer));
    this.currentDeck = new Deck(this.currentCards);
    this.currentRound = new Round(this.currentDeck, this);
    this.roundCount++;
    this.printMessage(this.currentDeck);
    this.printQuestion(this.currentRound); 
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;