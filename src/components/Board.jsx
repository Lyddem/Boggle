import React from 'react';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWord:'',
      board: [],
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
        total: 0
    };

  }

  componentWillMount() {
    var letter = '';

    this.state.dice.forEach(die => {
      letter = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter === 'Q') {
        this.state.board.push("Qu")
      } else {
        this.state.board.push(letter);
        // console.log(this.state.board)
      }
    })
  }

  clicked() {
    alert('clicked');
  }

  render () {
    return (
      <div id="board">
        {this.state.board.map((letter, index) => {
          return (
            <div className="btn">
              <span onClick={this.clicked}>{letter}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Board;

/*
          <div className="btn">
            <span>A</span>
          </div>
           <div className="btn">
            <span>B</span>
          </div>
           <div className="btn">
            <span>C</span>
          </div>
           <div className="btn">
            <span>D</span>
          </div>
           <div className="btn">
            <span>E</span>
          </div>
        </div>
*/