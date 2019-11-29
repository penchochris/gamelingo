import React from 'react';
import { useSelector } from 'react-redux';

import './Timer.scss';

const Timer = () => {
  const timer = useSelector(state => state.config.timer);
  
  return (
    <span className="timer">{timer}</span>
  );
}
 
export default Timer;