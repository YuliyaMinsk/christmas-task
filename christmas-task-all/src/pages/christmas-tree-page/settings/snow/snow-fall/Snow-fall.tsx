import React from 'react';

import './Snow-fall.scss';

 function SnowFall() {

  const classesSnowFall = ["snow layer1 a", "snow layer1", "snow layer2 a", "snow layer2", "snow layer3 a", "snow layer3"];
  const showLayers = classesSnowFall.map((item, index) => <div key={index} className={item}></div>);

  return (
    <div className="snow-container">      
      {showLayers}
    </div>
  );
}

export default SnowFall;