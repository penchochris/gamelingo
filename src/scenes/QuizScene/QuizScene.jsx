import React from 'react';
import { useSelector } from 'react-redux';
import { VIEWS } from '../../consts';


import NewGameMenu from '../../components/NewGameMenu/NewGameMenu';
import QuizGame from '../../components/QuizGame/QuizGame';
import GameResults from '../../components/GameResults/GameResults';
import GameStatus from '../../components/GameStatus/GameStatus';

import './QuizScene.scss';

const QuizScene = () => {

  const { quizView } = useSelector(state => state.view);

  return (
    <div className="quiz-scene-wrapper">
      <div className="quiz-wrapper">
        {{
          [VIEWS.OPTIONS]: <NewGameMenu/>,
          [VIEWS.PLAY]: (
            <>
              <GameStatus/>
              <QuizGame/>
            </>
          ),
          [VIEWS.STATS]: <GameResults/>
        }[quizView]}  
      </div>
    </div>
  );
}

export default QuizScene;