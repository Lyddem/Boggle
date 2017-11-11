import React from 'react';


class ScoreBoard extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <table>
          <tbody id="scoreboard">
            <tr>
              <th>Word</th>
              <th>Score</th>
            </tr>
            <tr>
              <td>Current</td>
              <td>11</td>
            </tr>
            <tr>
              <td>Urgent</td>
              <td>3</td>
            </tr>
            <tr>
              <td id="total">Total</td>
              <td id="total">13</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default ScoreBoard;