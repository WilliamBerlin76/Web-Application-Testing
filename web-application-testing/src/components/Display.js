import React, { useState } from 'react'
import Dashoard from './Dashboard'
const Display = () => {
    const [strike, setStrike] = useState(0);
    const [ball, setBall] = useState(0);
    
    return (
        <>
          <h1>Baseball Scoreboard</h1>
          <div className='at-bat'>
            <h2>At Bat</h2>
            <p>Strikes: {strike}</p>
            <p>Balls: {ball}</p>
          </div> 
          <Dashoard/>
        </>
    )
}

export default Display