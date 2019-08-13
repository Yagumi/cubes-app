import React, { Component } from 'react';
import './App.css';
import CubesGame from './components/CubesGame.js';



class App extends Component {
  render() {
    return(
      <div className="App">
        <CubesGame />
      </div>
    )
  }
}

export default App;
