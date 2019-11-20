import React from 'react';
import './Card.scss';

const Card = props => 
  <div className={`card ${props.type}`} onClick={props.handleClick}>
    {props.text}
  </div>
 
export default Card;