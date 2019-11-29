import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectQuizOptionSaga, newGameSaga, stopTimerSaga} from '../../actions/configActions';

import Card from '../../components/Card/Card';

import './GameOptions.scss';
import { VIEWS } from '../../consts';
import { handleUnmount } from '../../actions/viewActions';

const GameOptions = () => {
  const dispatch = useDispatch();

  const quiz = useSelector(state => state.quiz);
  const { currentQuiz } = useSelector(state => state.config);

  useEffect(() => {
    dispatch(newGameSaga());
    return () => {
      dispatch(stopTimerSaga());
      dispatch(handleUnmount(VIEWS.PLAY));
    }
  }, [dispatch]);

  return (
    <>
      <div className="main-card-wrapper">
        <Card type="main" text={quiz[currentQuiz].langA}/>
      </div>
      <div className="choose-card-wrapper">
        { 
          quiz[currentQuiz].options &&
            quiz[currentQuiz].options.map((option, i) => 
              <Card type="choose" key={i} text={option} handleClick={() => dispatch(selectQuizOptionSaga(option))}/>
            )
        }
      </div>
    </>
  );
}

export default GameOptions;