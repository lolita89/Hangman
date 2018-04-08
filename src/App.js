import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img class="centerimage" src="http://channels.roku.com/images/c4d0146ba6b34c068341249e3fe3d8f4-hd.jpg"/>
          <h1 className="App-title">Welcome to Hangman App</h1>
        </header>
        <body className="App-game">
        <div class="wrapper">
        <input type="text" disabled/>
        <input type="text" disabled/>
        <input type="text" disabled/>
        <input type="text" disabled/>
        <br/>
        <br/>
          <button type="button">A</button>
          <button type="button">B</button>
          <button type="button">C</button>
          <button type="button">D</button>
          <button type="button">E</button>
          <button type="button">F</button>
          <button type="button">G</button>
          <button type="button">H</button>
          <button type="button">I</button>
          <button type="button">J</button>
          <button type="button">K</button>
          <button type="button">L</button>
          <button type="button">M</button>
          <button type="button">N</button>
          <button type="button">O</button>
          <button type="button">P</button>
          <button type="button">Q</button>
          <button type="button">R</button>
          <button type="button">S</button>
          <button type="button">T</button>
          <button type="button">U</button>
          <button type="button">V</button>
          <button type="button">W</button>
          <button type="button">X</button>
          <button type="button">Y</button>
          <button type="button">Z</button>
</div>
</body>
      </div>
    );
  }
}

export default App;
