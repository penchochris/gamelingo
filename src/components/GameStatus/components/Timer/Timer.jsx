import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { startTimerSaga, stopTimerSaga } from '../../../../actions/timerActions';

import './Timer.scss';

const Timer = () => {
  
  const seconds = useSelector(state => state.timer.seconds);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startTimerSaga())

    return () => dispatch(stopTimerSaga());
  }, [dispatch])
  
  return (
    <span className="timer">{seconds}</span>
  );
}
 
export default Timer;