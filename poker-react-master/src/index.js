// DO NOT MODIFY ANYTHING BETWEEN LINES 1-33. NO REALLY.
// React
var React = require('react');
var ReactDOM = require('react-dom');

// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}
// END OF STUFF TO NOT MODIFY
var Card = React.createClass({
  render: function(){
    return (
      <div className="col-sm-2">
        <h1><img className="img-responsive" alt="card" src={"http://golearntocode.com/images/cards/" + this.props.number +".png"} /></h1>
      </div>
    )
  }
})
var Deal = React.createClass({
  render: function(){
    return (
      <div className="col-sm-2">
        <h1><a href="#" className="btn btn-success" onClick={this.props.loadDeck}>Deal</a></h1>
      </div>
    )
  }
})
var Deck = window.getDeck()
var App = React.createClass({
    getInitialState: function() {
        return {
      Deck
    }
  },
loadDeck: function() {
  var shuffleDeck = window.getDeck().shuffle()
  this.setState({
      Deck: shuffleDeck
    })
  },
  render: function() {
    return (
      <div>
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Card number={this.state.Deck[0]}/>
          <Card number={this.state.Deck[1]}/>
          <Card number={this.state.Deck[2]}/>
          <Card number={this.state.Deck[3]}/>
          <Card number={this.state.Deck[4]}/>
          <Deal loadDeck={this.loadDeck} />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById("app"))
