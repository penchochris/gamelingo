import React from 'react';
import './Timer.scss';

const Timer = props => {
  return ( 
  <div>
    <span className="timer">{props.timer}</span>
  </div>
  );
}
 
export default Timer;