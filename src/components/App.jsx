import React from 'react';
import ScoreBoard from './ScoreBoard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      total: 0,
      currentWord: '',
      data: [],
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
    //get current color
    let currentColor = event.target.attributes['data-color'].value;
    //new color will be opposite of currentColor
    let newColor = currentColor === '#FFF' ? '#ACCEEC' : '#FFF';
    //set bg color of div
    event.target.style.backgroundColor = newColor;
    //reset div's attribute to be the new color
    event.target.setAttribute('data-color', newColor);

    // add letter to state.currentWord
    let letter = event.target.innerText;
    this.setState({ currentWord: this.state.currentWord + letter })
  }

  submitWord(event) {

    //add word to state.data
    let word=this.state.currentWord;
    this.state.data.push(word);

    //check length and add points to state.total
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
    //clear selection
      //query by class name
      let buttons = document.querySelectorAll('.btn');
      //loop through each element
      buttons.forEach(el => {
        //set data-color to white
        console.log(el);
        // el.setAttribute('data-color', '#FFF',);
        el.setAttribute('style', 'background-color: rgb(255,255,255)')
      })
    //clear currentWord
    this.setState({ currentWord: '' })
  }

  render () {
    return (
      <div id="container">
        <img id="title" src="http://qumani.com/qdserve/boggle-logo.png"/>

      {/* Board */}
        <div id="board">
          <div className="row">
            {
              this.state.board1.map((letter, index) => {
              return (
                <div className="btn" data-color="#FFF" onClick={(e) => {this.clicked(e)}}> {letter}
                </div>
              )
            })}
          </div>
          <div className="row">
          {this.state.board2.map((letter, index) => {
            return (
              <div className="btn" data-color="#FFF" onClick={(e) => {this.clicked(e)}}> {letter}
              </div>
            )
          })}
          </div>
          <div className="row">
          {this.state.board3.map((letter, index) => {
            return (
              <div className="btn" data-color="#FFF" onClick={(e) => {this.clicked(e)}}> {letter}
              </div>
            )
          })}
          </div>
          <div className="row">
          {this.state.board4.map((letter, index) => {
            return (
              <div className="btn" data-color="#FFF" onClick={(e) => {this.clicked(e)}}> {letter}
              </div>
            )
          })}
          </div>
          <div className="row">
          {this.state.board5.map((letter, index) => {
            return (
              <div className="btn" data-color="#FFF" onClick={(e) => {this.clicked(e)}}> {letter}
              </div>
            )
          })}
          </div>

        </div> &nbsp;

      {/* Current Word & Submit */}
         <div id="cw-submit">
          <button type="button" id="submit" onClick={(e) => {this.submitWord(e)}}> Submit Word </button>
          <span><strong> Current Word: {this.state.currentWord} </strong></span>
        </div><br /><br />

      {/* Scoreboard */}
        <ScoreBoard total={this.state.total} data={this.state.data} />

      </div>
    )
  }
}

export default App;

