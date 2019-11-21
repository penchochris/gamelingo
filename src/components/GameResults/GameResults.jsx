import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuizStatus } from '../../actions/configActions';

import { DEFAULT } from '../../consts';

import './GameResults.scss';

const GameResults = () => {
  const { score } = useSelector(state => state.config);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setQuizStatus(DEFAULT.IS_SELECTING_OPTIONS));
    }
  }, [dispatch]);

  return ( 
    <div className="game-results-wrapper">
      <div className="game-results-game-over">Game Over</div>
      <div className="game-results-score">Score: {score}</div>
      <button className="game-results-play-again" onClick={() => dispatch(setQuizStatus(DEFAULT.IS_PLAYING))}>PLAY AGAIN</button>
      <button className="game-results-play-again" onClick={() => dispatch(setQuizStatus(DEFAULT.IS_SELECTING_OPTIONS))}>NEW QUIZ</button>
    </div>
  );
}
 
export default GameResults;