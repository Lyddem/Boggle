import React from 'react';


class ScoreBoard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    {console.log('total', this.props.total )}
    return (
      <div>
        <table>
          <tbody id="scoreboard">
            <tr>
              <th>Word</th>
              <th>Score</th>
            </tr>
            {
              this.props.data.map((word, i) => {
                return (
                  <tr>
                    <td>{word}</td>
                    <td>{word.length}</td>
                  </tr>
                )
              })
            }
            <tr>
              <td id="total">Total</td>
              <td id="total">{this.props.total}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ScoreBoard;