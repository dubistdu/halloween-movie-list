import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            Halloween Movie Collection
        </header>
        <movie className= "movieListRow">
          <ul>
            <li>Hocus Pocus</li>
          </ul>
          <ul>
            <li>Hocus Pocus</li>
          </ul>
        </movie>
      </div>
    );
  }
}

export default App;
