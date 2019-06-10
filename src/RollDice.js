import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice1: 1,
      dice2: 1,
      isRolling: false
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
    this.setState({ dice1: die1Temp, dice2: die2Temp, isRolling: true });
    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die num={this.state.dice1} isRolling={this.state.isRolling ? 'wobble' : ''} />
          <Die num={this.state.dice2} isRolling={this.state.isRolling ? 'wobble' : ''} />
        </div>
        <button onClick={this.rollIt} disabled={this.state.isRolling}>
          {!this.state.isRolling ? 'Roll Dice!!!' : 'Rolling'}
        </button>
      </div>
    );
  }
}
