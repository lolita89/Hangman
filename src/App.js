import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var wrongGuesses = 0;
var rightGuesses = 0;

class App extends Component {

  // ===================================================
  reset(eventHangman){
    window.location.reload();
  }
  // ===================================================

  onLetterClick(eventHangman){
    //to get the letter from the button
    var letter = eventHangman.currentTarget.id;

    // to check the letter
    if (letter === 'G'){
      // show message
      alert('correct letter!');
      // show the letter to board (react way??)
      document.getElementById('letter_g').value='G';
      // update the total number of right guesses
      rightGuesses = rightGuesses + 1;
    } else if (letter === 'O'){
      alert('correct letter!');
      document.getElementById('letter_o').value='O';
      rightGuesses = rightGuesses + 1;
    } else if (letter === 'A'){
      alert('correct letter!');
      document.getElementById('letter_a').value='A';
      rightGuesses = rightGuesses + 1;
    } else if (letter === 'L'){
      alert('correct letter!');
      document.getElementById('letter_l').value='L';
      rightGuesses = rightGuesses + 1;
    } else {
      wrongGuesses = wrongGuesses + 1;
      alert('wrong  letter!')
    }

    // if user guess all correct letters
    if (rightGuesses === 4){
      alert('Congrats! You won!');
    }

    // if user have 9 times wrong
    if (wrongGuesses === 9){
      alert('GAME OVER!');
    }
    //for disabling buttons
    document.getElementById(letter).setAttribute('disabled', 'disabled');
}
  // ===================================================

  // ===================================================
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img class="centerimage" src="http://channels.roku.com/images/c4d0146ba6b34c068341249e3fe3d8f4-hd.jpg"/>
          <h1 className="App-title">Welcome to Hangman App</h1>
        </header>
        <body className="App-game">
        <div class="wrapper">
        <input id="letter_g" type="text" disabled="disabled"/>
        <input id="letter_o" type="text" disabled="disabled"/>
        <input id="letter_a" type="text" disabled="disabled"/>
        <input id="letter_l" type="text" disabled="disabled"/>
        <br/>
        <br/>
          <button onClick={this.onLetterClick} id="A" type="button">A</button>
          <button onClick={this.onLetterClick} id="B" type="button">B</button>
          <button onClick={this.onLetterClick} id="C" type="button">C</button>
          <button onClick={this.onLetterClick} id="D" type="button">D</button>
          <button onClick={this.onLetterClick} id="E" type="button">E</button>
          <button onClick={this.onLetterClick} id="F" type="button">F</button>
          <button onClick={this.onLetterClick} id="G" type="button">G</button>
          <button onClick={this.onLetterClick} id="H" type="button">H</button>
          <button onClick={this.onLetterClick} id="I" type="button">I</button>
          <button onClick={this.onLetterClick} id="J" type="button">J</button>
          <button onClick={this.onLetterClick} id="K" type="button">K</button>
          <button onClick={this.onLetterClick} id="L" type="button">L</button>
          <button onClick={this.onLetterClick} id="M" type="button">M</button>
          <button onClick={this.onLetterClick} id="N" type="button">N</button>
          <button onClick={this.onLetterClick} id="O" type="button">O</button>
          <button onClick={this.onLetterClick} id="P" type="button">P</button>
          <button onClick={this.onLetterClick} id="Q" type="button">Q</button>
          <button onClick={this.onLetterClick} id="R" type="button">R</button>
          <button onClick={this.onLetterClick} id="S" type="button">S</button>
          <button onClick={this.onLetterClick} id="T" type="button">T</button>
          <button onClick={this.onLetterClick} id="U" type="button">U</button>
          <button onClick={this.onLetterClick} id="V" type="button">V</button>
          <button onClick={this.onLetterClick} id="W" type="button">W</button>
          <button onClick={this.onLetterClick} id="X" type="button">X</button>
          <button onClick={this.onLetterClick} id="Y" type="button">Y</button>
          <button onClick={this.onLetterClick} id="Z" type="button">Z</button>
          <br/>
          <br/>
          <button onClick={this.reset} id="reset" type="button">RESET</button>

        </div>
        </body>
      </div>
    );
  }
  // ===================================================
}


export default App;
