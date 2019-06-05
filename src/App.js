import React, { Component } from 'react';
import './App.css';
import RollDice from './RollDice';

class App extends Component {
  render() {
    return (
      <div className="centre">
        <RollDice />
      </div>
    );
  }
}

export default App;
