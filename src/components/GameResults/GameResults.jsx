import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeIsPlaying } from '../../actions/configActions';

import './GameResults.scss';

const GameResults = () => {
  const { score } = useSelector(state => state.config);
  const dispatch = useDispatch();

  return ( 
    <div className="game-results-wrapper">
      <div className="game-results-game-over">Game Over</div>
      <div className="game-results-score">Score: {score}</div>
      <button className="game-results-play-again" onClick={() => dispatch(changeIsPlaying())}>PLAY AGAIN</button>
    </div>
  );
}
 
export default GameResults;