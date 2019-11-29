import React from 'react';
import { useSelector } from 'react-redux';
import { VIEWS } from '../../consts';


import NewGameMenu from '../../components/NewGameMenu/NewGameMenu';
import GameOptions from '../../components/GameOptions/GameOptions';
import GameStats from '../../components/GameStats/GameStats';
import GameStatus from '../../components/GameStatus/GameStatus';

import './QuizScene.scss';

const QuizScene = () => {

  const { quizView } = useSelector(state => state.view);

  return (
    <div className="quiz-scene-wrapper">
        {{
          [VIEWS.OPTIONS]: <NewGameMenu/>,
          [VIEWS.PLAY]: (
            <div className="quiz-wrapper">
              <GameStatus/>
              <GameOptions/>
            </div>
          ),
          [VIEWS.STATS]: <GameStats/>
        }[quizView]}  
      
    </div>
  );
}

export default QuizScene;