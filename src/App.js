import React, { Component } from 'react';
import logo from './logo.svg';
import Items from './Items.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">uncrate</h1>
          <a href="#">Gear</a>
          <a href="#">Style</a>
          <a href="#">Cars</a>
          <a href="#">Tech</a>
          <a href="#">Shelter</a>
          <a href="#">Vices</a>
          <a href="#">Body</a>
          <a href="#">Etc</a>
          <a href="#">Videos</a>
          <img src="https://www.shopversona.com/mobile/images/magglass.png" />
        </header>

        <Items />

      </div>
    );
  }
}

export default App;
