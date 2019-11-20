import React from 'react';
import { useSelector } from 'react-redux';
import './Score.scss';

const Score = () => {
  const score = useSelector(state => state.config.score);
  return ( 
    <div>
      <span className="score">{score}</span>
    </div>
  );
}
 
export default Score;