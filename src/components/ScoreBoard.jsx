import React from 'react';

class ScoreBoard extends React.Component {
  constructor(props) {
    super(props)
    this.calculateScore = this.calculateScore.bind(this);
  }

  calculateScore (word) {
    if (word.length === 1 || word.length === 2) {
      return 0;
    }
    if (word.length === 3 || word.length === 4) {
      return 1;
    }
    if (word.length === 5) {
      return 2;
    }
    if (word.length === 6) {
      return 3;
    }
    if (word.length === 7) {
      return 5;
    }
    if (word.length >= 8) {
      return 11;
    }
  }

  render() {
    return (
      <div id="scoreboard">
        <table>
          <tbody>
            <tr>
              <th>Word</th>
              <th>Score</th>
            </tr>
            {
              this.props.data.map((word, i) => {
                return (
                  <tr>
                    <td>{word}</td>
                    <td>{this.calculateScore(word)}</td>
                  </tr>
                )
              })
            }
            <tr>
              <td id="total"><strong>Total</strong></td>
              <td id="total"><strong>{this.props.total}</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ScoreBoard;