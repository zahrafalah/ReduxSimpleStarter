import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/search_bar';

// import dotenv from 'dotenv';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
