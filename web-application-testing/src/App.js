import React, { useState } from 'react';
import './App.css';

function App() {
  const [strike, setStrike] = useState(0);
  const [ball, setBall] = useState(0);
  
  const onStrike = e => {
    if (strike < 2) {
      setStrike(strike + 1)
     } else {
       setStrike(0);
       setBall(0);
      }
  };
  const onBall = e => {
    if (ball < 3) {
      setBall(ball + 1)
    } else {
      setBall(0);
      setStrike(0);
    }
  };
  const onFoul = e => {
    strike < 2 ? setStrike(strike + 1) : setStrike(strike)
  };
  const onHit = e => {
    setStrike(0);
    setBall(0);
  };

  return (
    <div className="App">
      <h1>Baseball Scoreboard</h1>

      <div className='at-bat'>
        <h2>At Bat</h2>
        <p>Strikes: {strike}</p>
        <p>Balls: {ball}</p>
      </div>

      <div className='button-container'>
        <button onClick={onStrike}>Strike</button>
        <button onClick={onBall}>Ball</button>
        <button onClick={onFoul}>Foul</button>
        <button onClick={onHit}>Hit</button>
      </div>
    </div>
  );
}

export default App;
