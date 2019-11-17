import React from 'react';
import Card from '../Components/Card/Card';
import Lifes from '../Components/Lifes/Lifes';
import Timer from '../Components/Timer/Timer';
import Points from '../Components/Points/Points';

import './styles/ChooseGame.scss';

const ChooseGame = () => {
  return (
    <div className="choose-game">
      <div className="game-menu">
        <Lifes/>
        <Timer/>
        <Points/>
      </div>
      <div className="main-card-wrapper">
        <Card type='main'/>
      </div>
      <div className="choose-card-wrapper">
        <Card type='choose'/>
        <Card type='choose'/>
        <Card type='choose'/>
        <Card type='choose'/>
      </div>
    </div>
  );
}

export default ChooseGame;