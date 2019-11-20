import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeIsPlaying } from '../../actions/configActions';

const GameResults = () => {
  const { score } = useSelector(state => state.config);
  const dispatch = useDispatch();

  return ( 
    <div>
      <div>Game Over</div>
      <div>Score: {score}</div>
      <button onClick={() => dispatch(changeIsPlaying())}>PLAY AGAIN</button>
    </div>
  );
}
 
export default GameResults;