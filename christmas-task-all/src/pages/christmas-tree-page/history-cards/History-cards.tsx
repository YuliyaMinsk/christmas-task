import React from 'react';

import { Constants } from '../../../common/Constants';
import './History-cards.scss';

 function HistoryCards() {
  return (
    <div className='history-cards'>      
      <h3>{Constants.SELECT_HISTORY}</h3>
      <div className='history-box'> 
        <button className='history-case history-1'></button>
      </div>
    </div>
  );
}

export default HistoryCards;