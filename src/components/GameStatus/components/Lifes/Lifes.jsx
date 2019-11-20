import React from 'react';
import { useSelector } from 'react-redux';
import Heart from './components/Heart';

import './Lifes.scss';

const Lifes = () => {
  
  const { lifes, totalLifes } = useSelector(state => state.config);

  return ( 
    <div className="lifes">
      {[...Array(lifes)].map((e, i) => 
        <Heart type="red" key={i}/>)
      }
      {[...Array(totalLifes - lifes)].map((e, i) => 
        <Heart key={i}/>)
      }
    </div>
  );
}
 
export default Lifes;