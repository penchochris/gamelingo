import React from 'react';

import New from '../../components/New/New';

import './NewsScene.scss';

const NewsScene = () => {  
  return (
    <div className="news-wrapper">
      <New/>
      <New/>
      <New/>
    </div>
  );
}

export default NewsScene;