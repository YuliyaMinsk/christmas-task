import React from 'react';
import { useDispatch } from 'react-redux';

import { Constants } from '../../../common/Constants';
import { selectGarland } from '../../../redux/actions';
import './Garland-select.scss';

 function GarlandSelect() {

  const dispatch = useDispatch();
  return (
    <div className='garland-select'>      
      <h3>{Constants.SELECT_GARLAND}</h3>
      <div className='garland-box'> 
        <button className='garland-case garland-multicolor' onClick={() => dispatch(selectGarland('garland-multicolor'))}></button>
        <button className='garland-case garland-red' onClick={() => dispatch(selectGarland('garland-red'))}></button>
        <button className='garland-case garland-blue' onClick={() => dispatch(selectGarland('garland-blue'))}></button>
        <button className='garland-case garland-yellow' onClick={() => dispatch(selectGarland('garland-yellow'))}></button>
        <button className='garland-case garland-green' onClick={() => dispatch(selectGarland('garland-green'))}></button>
        <button className='garland-case garland-off' onClick={() => dispatch(selectGarland('off-light'))}></button>
      </div>
    </div>
  );
}

export default GarlandSelect;