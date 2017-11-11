import React from 'react';
import Board from './Board.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      board: [],
      total: 0,
      currentWord: '',
      dice: [
        "aaafrs",
        "aaeeee",
        "aafirs",
        "adennn",
        "aeeeem"],
        // "aeegmu",
        // "aegmnn",
        // "afirsy",
        // "bjkqxz",
        // "ccenst"
        // "ceiilt",
        // "ceilpt",
        // "ceipst",
        // "ddhnot",
        // "dhhlor",
        // "dhlnor",
        // "dhlnor",
        // "eiiitt",
        // "emottt",
        // "ensssu",
        // "fiprsy",
        // "gorrvw",
        // "iprrry",
        // "nootuw",
        // "ooottu"]
    }

    this.clicked = this.clicked.bind(this);
  }

componentWillMount() {
    var letter = '';

    this.state.dice.forEach(die => {
      letter = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter === 'Q') {
        this.state.board.push("Qu")
      } else {
        this.state.board.push(letter);
      }
    })
  }

clicked() {
  alert('clicked');
}

render () {
  return (
    <div id="container">
      <img id="title" src="http://qumani.com/qdserve/boggle-logo.png"/>


      <div id="board">
          {this.state.board.map((letter, index) => {
            return (
              <div className="btn" onClick={this.clicked}>
                <span> {letter}</span>
              </div>
            )
          })}
        </div><br />

       <div id="cw-submit">
        <button type="button" id="submit"> Submit Word </button>
        <span><strong> Current Word: {this.state.currentWord} </strong></span>
      </div><br /><br />

      <ScoreBoard />

    </div>
  )
}

}

export default App;

