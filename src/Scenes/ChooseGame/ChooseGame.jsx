import React, { useState, useEffect } from 'react';

import Card from '../../Components/Card/Card';
import Lifes from '../../Components/Lifes/Lifes';
import Timer from '../../Components/Timer/Timer';
import Points from '../../Components/Points/Points';

import './ChooseGame.scss';

const ChooseGame = props => {
  
  const [game, setGame] = useState([{}]);
  const [currentOption, setCurrentOption] = useState(0);
  const [points, setPoints] = useState(0);
  const [lifes, setLifes] = useState(3);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    
    setTimer(10);

    const interval = setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000)

    return () => clearInterval(interval);
  }, [currentOption]);

  useEffect(() => {
    if(timer === 0) {
      getNextQuestion();
    }
  }, [timer])

  useEffect(() => {
    //mocked:
    setGame([{
      langA: 'Gato',
      langB: 'ねこ',
      options: ['ねこ', 'オオカミ', 'カバ', 'トラ']
    },
    {
      langA: 'Perro',
      langB: 'いぬ',
      options: ['オオカミ', 'ねこ', 'いぬ', 'トラ']
    }])

  },[]);

  const getNextQuestion = () => {
    if(currentOption === game.length - 1 || lifes === 0) {
      console.log('game finished')
    } else {
      setCurrentOption(currentOption + 1)
    }
  }

  const handleSelectedOption = (option) => {
    if (game[currentOption].langB === option) {
      setPoints(points + 15)
    } else {
      setLifes(lifes - 1)
    }

    getNextQuestion();
    
  }
  
  return (
    <div className="choose-game">
      <div className="game-menu">
        <Lifes lifes={lifes} totalLifes={3}/>
        <Timer timer={timer}/>
        <Points points={points}/>
      </div>
      <div className="main-card-wrapper">
        <Card type="main" text={game[currentOption].langA}/>
      </div>
      <div className="choose-card-wrapper">
        { 
          game[currentOption].options &&
            game[currentOption].options.map(option => 
              <Card type="choose" text={option} handleClick={() => handleSelectedOption(option)}/>
            )
        }
      </div>
    </div>
  );
}

export default ChooseGame;