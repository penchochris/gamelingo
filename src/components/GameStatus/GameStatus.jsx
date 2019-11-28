import React from 'react';

import Timer from './components/Timer/Timer';
import Lifes from './components/Lifes/Lifes';
import Score from './components/Score/Score';

import './GameStatus.scss'

const GameStatus = () => {

  return (  
    <div className="game-status">
      <Lifes/>
      <Timer/>
      <Score/>
    </div>
  );
}
 
export default GameStatus;