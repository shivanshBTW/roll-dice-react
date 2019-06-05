import React, { Component } from 'react';
import './Die.css';

export default class Die extends Component {
  //   constructor(props) {
  //     super(props);
  //     // this.state = {
  //     //   letterNum: 'one'
  //     // };
  //     // this.numToWords();
  //     // this.numToWords = this.numToWords.bind(this);
  //   }
  numToWords() {
    let num = this.props.num;
    // console.log(num);
    let tempLetter;
    if (num === 1) {
      tempLetter = 'one';
    } else if (num === 2) {
      tempLetter = 'two';
    } else if (num === 3) {
      tempLetter = 'three';
    } else if (num === 4) {
      tempLetter = 'four';
    } else if (num === 5) {
      tempLetter = 'five';
    } else if (num === 6) {
      tempLetter = 'six';
    }
    // this.setState({ letterNum: tempLetter });
    return tempLetter;
  }
  render() {
    return (
      <div className="Die">
        <i className={`fas fa-dice-${this.numToWords()}`} />
        {/* {this.numToWords} */}
      </div>
    );
  }
}
