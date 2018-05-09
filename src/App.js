import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <table className="racer-table">
          <tbody>
            <tr id="player1-strip">
              <td />
              <td className="active" />
              <td />
              <td />
            </tr>
            <tr id="player2-strip">
              <td />
              <td />
              <td className="active" />
              <td />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
