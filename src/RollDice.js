import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 1,
      dice2: 1
    };
    this.rollIt = this.rollIt.bind(this);
  }
  randGen() {
    let rand = Math.floor(Math.random() * 6) + 1;
    return rand;
  }

  rollIt(e) {
    let die1Temp = this.randGen();
    let die2Temp = this.randGen();
    this.setState({ dice1: die1Temp, dice2: die2Temp });
  }

  render() {
    return (
      <div>
        <div className="RollDice-dice">
          <Die num={this.state.dice1} />
          <Die num={this.state.dice2} />
        </div>
        <button onClick={this.rollIt}>Roll Dice!!!</button>
      </div>
    );
  }
}
