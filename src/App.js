import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import Movies from './movies.js';
import './movie-data.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Movies/>
      </div>
    );
  }
}

export default App;
