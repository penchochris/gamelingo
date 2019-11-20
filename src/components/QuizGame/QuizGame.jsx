import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectQuizOptionSaga, newGameSaga, endGameSaga } from '../../actions/configActions';


import Card from '../../components/Card/Card';

import './QuizGame.scss';

const QuizGame = () => {
  const dispatch = useDispatch();

  const { quiz } = useSelector(state => state.game);
  const { currentQuiz } = useSelector(state => state.config);

  useEffect(() => {

  }, []);

  useEffect(() => {
    dispatch(newGameSaga());
    return () => {
      dispatch(endGameSaga());
    }
  }, [dispatch]);

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