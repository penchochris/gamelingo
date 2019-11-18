import React from 'react';
import './Lifes.scss';
import { create } from 'istanbul-reports';


const Lifes = props => {
  
  const createHearts = () => {
    const hearts = [];

    for(let i = 0; i < props.lifes; i++) {
      hearts.push(<span className="red">❤</span>);
    }

    for(let i = 0; i < props.totalLifes - props.lifes; i++) {
      hearts.push(<span>❤</span>);
    }

    return hearts;
  }
  const hearts = createHearts();
  

  return ( 
    <div className="lifes">
      {hearts.map(heart => heart)}
    </div>
  );
}
 
export default Lifes;