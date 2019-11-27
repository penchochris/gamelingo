import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setQuizView, handleUnmount } from '../../actions/viewActions';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { VIEWS } from '../../consts';
import './GameResults.scss';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    width: '200px'
  },
}));

const GameResults = () => {
  const { score } = useSelector(state => state.config);
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    return () => {
      dispatch(handleUnmount(VIEWS.RESULTS));
    }
  }, [dispatch]);

  return ( 
    <div className="game-results-wrapper">
      <h1 className="game-results-game-over">GAME OVER</h1>
      <h2 className="game-results-score">SCORE: {score}</h2>
      <Button variant="outlined" className={classes.button} onClick={() => dispatch(setQuizView(VIEWS.PLAY))}>
        PLAY AGAIN
      </Button>
      <Button variant="outlined" className={classes.button} onClick={() => dispatch(setQuizView(VIEWS.OPTIONS))}>
        NEW GAME
      </Button>
    </div>
  );
}
 
export default GameResults;