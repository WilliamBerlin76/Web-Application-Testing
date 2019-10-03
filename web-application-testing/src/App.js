import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const onStrike = () => {

  };
  const onBall = () => {

  };
  const onFowl = () => {

  };
  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>

      <div className='at-bat'>
        <h2>At Bat</h2>
        <p>Strikes:</p>
        <p>Balls:</p>
      </div>

      <div className='button-container'>
        <button>Strike</button>
        <button>Ball</button>
        <button>Foul</button>
      </div>
    </div>
  );
}

export default App;
