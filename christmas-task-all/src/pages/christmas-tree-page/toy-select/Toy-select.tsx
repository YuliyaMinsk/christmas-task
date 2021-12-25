import React from 'react';
import { useDispatch } from 'react-redux';

import { Constants } from '../../../common/Constants';
import './Toy-select.scss';

 function ToySelect() {

  const dispatch = useDispatch();
  return (
    <div className='toy-select'>      
      <h3>{Constants.SELECT_TOY}</h3>
      <div className='toy-box'> 
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
        <button className='toy-case toy-1'></button>
      </div>
    </div>
  );
}

export default ToySelect;