import React from 'react';
import './Card.scss';

const Card = props => {
  return ( 
    <div className={`card ${props.type}`}>
      <p className="card-text">Austrolopitecus</p>
    </div> 
  );
}
 
export default Card;