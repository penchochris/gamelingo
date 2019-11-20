import React from 'react';
import { useSelector } from 'react-redux';

import './Timer.scss';

const Timer = () => {
  const seconds = useSelector(state => state.timer.seconds);
  
  return (
    <span className="timer">{seconds}</span>
  );
}
 
export default Timer;