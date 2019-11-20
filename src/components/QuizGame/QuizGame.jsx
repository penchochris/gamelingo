import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { nextQuizSaga, selectQuizOptionSaga } from '../../actions/configActions';
import { resetTimer } from '../../actions/timerActions';

import Card from '../../components/Card/Card';

import './QuizGame.scss';

const QuizGame = () => {
  
  const dispatch = useDispatch();
  const { quiz } = useSelector(state => state.game);
  const { currentQuiz } = useSelector(state => state.config);
  const { seconds } = useSelector(state => state.timer);

  useEffect(() => {
    dispatch(resetTimer());
  }, [currentQuiz, dispatch]);

  useEffect(() => {
    if(seconds === 0) {
      dispatch(nextQuizSaga());
    }
  }, [seconds, dispatch])

  return (
    <div>
      <div className="main-card-wrapper">
        <Card type="main" text={quiz[currentQuiz].langA}/>
      </div>
      <div className="choose-card-wrapper">
        { 
          quiz[currentQuiz].options &&
            quiz[currentQuiz].options.map( (option, i) => 
              <Card type="choose" key={i} text={option} handleClick={() => dispatch(selectQuizOptionSaga(option))}/>
            )
        }
      </div>
    </div>
  );
}

export default QuizGame;