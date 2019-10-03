import React from 'react';

const Dashboard = ({onStrike, onBall, onFoul, onHit}) => {
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
    return(
      <div className='button-container'>
        <button onClick={onStrike}>Strike</button>
        <button onClick={onBall}>Ball</button>
        <button onClick={onFoul}>Foul</button>
        <button onClick={onHit}>Hit</button>
      </div>
    )
}

export default Dashboard