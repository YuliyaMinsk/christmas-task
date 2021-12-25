import React from 'react';
import { useDispatch } from 'react-redux';

import { Constants } from '../../../common/Constants';
import { selectBackground } from '../../../redux/actions';
import './Background-select.scss';

 function BackgroundSelect() {

  const dispatch = useDispatch();
  return (
    <div className='background-select'>      
      <h3>{Constants.SELECT_BACKGROUND}</h3>
      <div className='background-box'> 
        <button className='background-case background-1' onClick={() => dispatch(selectBackground('background-1'))}></button>
        <button className='background-case background-2' onClick={() => dispatch(selectBackground('background-2'))}></button>
        <button className='background-case background-3' onClick={() => dispatch(selectBackground('background-3'))}></button>
        <button className='background-case background-4' onClick={() => dispatch(selectBackground('background-4'))}></button>
        <button className='background-case background-5' onClick={() => dispatch(selectBackground('background-5'))}></button>
        <button className='background-case background-6' onClick={() => dispatch(selectBackground('background-6'))}></button>
        <button className='background-case background-7' onClick={() => dispatch(selectBackground('background-7'))}></button>
        <button className='background-case background-8' onClick={() => dispatch(selectBackground('background-8'))}></button>
        <button className='background-case background-9' onClick={() => dispatch(selectBackground('background-9'))}></button>
        <button className='background-case background-10' onClick={() => dispatch(selectBackground('background-10'))}></button>
      </div>
    </div>
  );
}

export default BackgroundSelect;