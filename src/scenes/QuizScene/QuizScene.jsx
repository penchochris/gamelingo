import React from 'react';
import { useSelector } from 'react-redux';

import GameStatus from '../../components/GameStatus/GameStatus';
import QuizGame from '../../components/QuizGame/QuizGame';
import GameResults from '../../components/GameResults/GameResults';

import './QuizScene.scss';

const QuizScene = () => {

  const isPlaying = useSelector(state => state.config.isPlaying);

  return (
    isPlaying
      ? <div className="quiz-wrapper">
          <GameStatus/>
          <QuizGame/>
        </div>
      : <GameResults/>
  );
}

export default QuizScene;