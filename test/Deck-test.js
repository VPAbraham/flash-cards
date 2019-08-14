const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');


describe('Deck', function() {


  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be able to return the number of cards it contains', function() {
    card1 = new Card(2, 'Who is the main character in "Roadhouse?', ['Chuck Norris', 'Patrick Swayze', 'Burt Reynolds'], 'Patrick Swayze');
    card2 = new Card(12, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(14, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald'); 
    deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });

  

});