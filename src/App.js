import React from 'react';
import './App.css';
import smile from './assets/imgs/smile.jpg';

export default class App extends React.Component() {
  render() {
    return (
      <div className="App">
        <div className="container">
          <img src={smile} alt='' />
          <button>TOGGLE CSS</button>
        </div>
      </div>
    );
  }
}

