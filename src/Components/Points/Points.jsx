import React from 'react';
import './Points.scss';

const Points = props => {
  return ( 
    <div>
      <span className="points">{props.points}</span>
    </div>
  );
}
 
export default Points;