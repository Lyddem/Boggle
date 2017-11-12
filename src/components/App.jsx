import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      color: '#FFF',
      currentWord: 'test',
      urrenWord: [],
      data: ['test123','test12','test1'],
      board1: [],
      board2: [],
      board3: [],
      board4: [],
      board5: [],
      row1: ["aaafrs","aaeeee","aafirs","adennn","aeeeem"],
      row2: ["aeegmu","aegmnn","afirsy","bjkqxz","ccenst"],
      row3: ["ceiilt","ceilpt", "ceipst","ddhnot","dhhlor"],
      row4: ["dhlnor","dhlnor", "eiiitt","emottt","ensssu"],
      row5: ["fiprsy","gorrvw", "iprrry","nootuw","ooottu"],
    }

    this.clicked = this.clicked.bind(this);
    this.submitWord = this.submitWord.bind(this);
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

  clicked(event) {
    console.log('EVENT', event.target.innerText);
    event.target.style.backgroundColor = "#ACCEEC";
     //change background color
    let newColor= this.state.color === "#FFF" ? "#ACCEEC" : "#FFF";
    this.setState({ color: newColor });
    // add letter to currentWord
    //if color is not white, subtract - deselect
  }

  submitWord() {

    function calculateScore (word) {

    }
    //add word to this.data
    let word=this.state.currentWord;
    this.state.data.push(word);

    //check length and add points to this.total
    if (word.length === 1 || word.length === 2) {
      this.setState({ total: this.state.total += 0 });
    }
    if (word.length === 3 || word.length === 4) {
      this.setState({ total: this.state.total += 1 });
    }
    if (word.length === 5) {
      this.setState({ total: this.state.total += 2 });
    }
    if (word.length === 6) {
      this.setState({ total: this.state.total += 3 });
    }
    if (word.length === 7) {
      this.setState({ total: this.state.total += 5 });
    }
    if (word.length >= 8) {
      this.setState({ total: this.state.total += 11 });
    }
    //deselect(background color --> white)
    this.setState({ color: '#FFF'})
  }

  render () {
    return (
      <div id="container">
        <img id="title" src="http://qumani.com/qdserve/boggle-logo.png"/>

      {/* Board */}
        <div id="board">
          <div className="row">
            {this.state.board1.map((letter, index) => {
              return (
                <div className="btn" onClick={(e) => {this.clicked(e)}}> {letter}
                </div>
              )
            })}
          </div>
          <div className="row">
          {this.state.board5.map((letter, index) => {
            return (
              <div className="btn" onClick={() => this.clicked(e)} style={{background:this.state.color}}> {letter}
              </div>
            )
          })}
          </div>
          <div className="row">
          {this.state.board3.map((letter, index) => {
            return (
              <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
                <span>{letter}</span>
              </div>
            )
          })}
          </div>
          <div className="row">
          {this.state.board4.map((letter, index) => {
            return (
              <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
                <span>{letter}</span>
              </div>
            )
          })}
          </div>
          <div className="row">
          {this.state.board5.map((letter, index) => {
            return (
              <div className="btn" value={letter} onClick={() => this.clicked({letter})}>
                <span>{letter}</span>
              </div>
            )
          })}
          </div>
        </div> &nbsp;

      {/* Current Word & Submit */}
         <div id="cw-submit">
          <button type="button" id="submit" onClick={this.submitWord}> Submit Word </button>
          <span><strong> Current Word: {this.state.currentWord} </strong></span>
        </div><br /><br />

      {/* Scoreboard */}
        <ScoreBoard total={this.state.total} data={this.state.data} />

      </div>
    )
  }
}

export default App;

