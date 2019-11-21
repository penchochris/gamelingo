import React from 'react';
import heartSvg from './heart.svg';

const Heart = props => <img alt="❤" className={props.type} src={heartSvg}/>
 
export default Heart;