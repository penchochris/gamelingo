import React from 'react';

import Timer from './components/Timer/Timer';
import Lifes from './components/Lifes/Lifes';
import Score from './components/Score/Score'

const GameStatus = () => {

  return (  
    <div className="game-menu">
      <Lifes/>
      <Timer/>
      <Score/>
    </div>
  );
}
 
export default GameStatus;