import React from 'react';
import { useSelector } from 'react-redux';


import NewGameMenu from '../../components/NewGameMenu/NewGameMenu';
import QuizGame from '../../components/QuizGame/QuizGame';
import GameResults from '../../components/GameResults/GameResults';
import GameStatus from '../../components/GameStatus/GameStatus';

import './QuizScene.scss';
import { DEFAULT } from '../../consts';

const QuizScene = () => {

  const { quizStatus } = useSelector(state => state.config);

  const view = {
    [DEFAULT.IS_SELECTING_OPTIONS]: <NewGameMenu/>,
    [DEFAULT.IS_PLAYING]: (
      <>
        <GameStatus/>
        <QuizGame/>
      </>
    ),
    [DEFAULT.IS_VIEWING_STATS]: <GameResults/>
  }

  return (
    <div className="quiz-scene-wrapper">
      <div className="quiz-wrapper">
        { view[quizStatus] }  
      </div>
    </div>
  );
}

export default QuizScene;