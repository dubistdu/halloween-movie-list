import React, { Component } from 'react';
import './App.css';
import Header from './header.js';
import MovieList from './movies.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MovieList/>
      </div>
    );
  }
}

export default App;
