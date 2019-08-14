const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Round', function() {

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  })

  it('should be a function', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck of cards as a parameter', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should be able to tell the order of cards in the deck', function() {
    expect(round.deck[0]).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  });

  it('should return the default number of turns', function() {
    expect(round.turns).to.be.equal(0);
  }); 
  
  it('should return an incorrect guesses array that is empty by default', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  }); 
  
  it('should return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  }); 

  it('should be able to tell the order of cards in the deck', function() {
    expect(round.returnCurrentCard()).to.deep.equal({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
  }); 

  it('should give feedback on the guess', function() {
    expect(round.takeTurn('capybara')).to.equal('Incorrect!');
  }); 

  it('should should add incorrect guesses into their array', function() {
    round.takeTurn('capybara')
    expect(round.incorrectGuesses).to.deep.equal([1]);
  }); 

  it('should remove the guessed card from the deck', function() {
    round.takeTurn('capybara')
    expect(round.deck).to.deep.equal([card2, card3]);
    expect(round.deck[0]).to.deep.equal({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    expect(round.deck[1]).to.deep.equal({id: 12, question: 'What is Travis\'s favorite stress reliever?', answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'], correctAnswer: 'playing with bubble wrap'});
  }); 

  it('should go to the next card after a guess is made', function() {
    round.takeTurn('capybara');
    expect(round.returnCurrentCard()).to.deep.equal({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
  });                                           

  it('should process the guess for the current card', function() {
    round.takeTurn('capybara');
    expect(round.takeTurn('gallbladder')).to.equal('Correct!');
  }); 

  it('should count the number of turns that have been taken', function() {
    round.takeTurn('capybara');
    round.takeTurn('gallbladder');
    expect(round.turns).to.equal(2);
  }); 

});