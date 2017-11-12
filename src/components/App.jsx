import React from 'react';
import Board from './Board.jsx';
import ScoreBoard from './ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [],
      board1: [],
      board2: [],
      board3: [],
      board4: [],
      board5: [],
      total: 0,
      currentWord: '',
      row1: ["aaafrs","aaeeee","aafirs","adennn","aeeeem"],
      row2: ["aeegmu","aegmnn","afirsy","bjkqxz","ccenst"],
      row3: ["ceiilt","ceilpt", "ceipst","ddhnot","dhhlor"],
      row4: ["dhlnor","dhlnor", "eiiitt","emottt","ensssu"],
      row5: ["fiprsy","gorrvw", "iprrry","nootuw","ooottu"],
    }

    this.clicked = this.clicked.bind(this);
  }

componentWillMount() {
    let letter1 = '';
    let letter2 = '';
    let letter3 = '';
    let letter4 = '';
    let letter5 = '';

    this.state.row1.forEach(die => {
      letter1 = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter1 === 'Q') {
        this.state.board1.push("Qu")
      } else {
        this.state.board1.push(letter1);
      }
    })
    this.state.row2.forEach(die => {
      letter2 = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter2 === 'Q') {
        this.state.board2.push("Qu")
      } else {
        this.state.board2.push(letter2);
      }
    })
    this.state.row3.forEach(die => {
      letter3 = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter3 === 'Q') {
        this.state.board3.push("Qu")
      } else {
        this.state.board3.push(letter3);
      }
    })
    this.state.row4.forEach(die => {
      letter4 = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter4 === 'Q') {
        this.state.board5.push("Qu")
      } else {
        this.state.board4.push(letter4);
      }
    })
    this.state.row5.forEach(die => {
      letter5 = die[Math.floor(Math.random() * 6)].toUpperCase();
      if (letter5 === 'Q') {
        this.state.board5.push("Qu")
      } else {
        this.state.board5.push(letter5);
      }
    })
  }

clicked() {
  //change background color
  let letter = document.querySelector('.btn span').innerHTML;
  console.log('LETTER', letter)
  //add letter to currentWord
  this.setState({
    currentWord: this.state.currentWord + letter
  })

  console.log('letter', letter)
}

render () {
  return (
    <div id="container">
      <img id="title" src="http://qumani.com/qdserve/boggle-logo.png"/>

    {/* Board */}
      <div id="board">
        <div class="row">
          {this.state.board1.map((letter, index) => {
            return (
              <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
                <span> {letter} </span>
              </div>
            )
          })}
        </div>
        <div class="row">
        {this.state.board5.map((letter, index) => {
          return (
            <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
              <span>{letter}</span>
            </div>
          )
        })}
        </div>
        <div class="row">
        {this.state.board3.map((letter, index) => {
          return (
            <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
              <span>{letter}</span>
            </div>
          )
        })}
        </div>
        <div class="row">
        {this.state.board4.map((letter, index) => {
          return (
            <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
              <span>{letter}</span>
            </div>
          )
        })}
        </div>
        <div class="row">
        {this.state.board5.map((letter, index) => {
          return (
            <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
              <span>{letter}</span>
            </div>
          )
        })}
        </div>
      </div> &nbsp;

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

