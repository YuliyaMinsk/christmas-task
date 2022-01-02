import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Constants } from '../../../common/Constants';
import { appState } from '../../../common/types';
import './Toy-select.scss';

 function ToySelect() {

  const { countSelected, toysData } = useSelector((state: appState) => state);

  let toyCaseList = []; 

  if (countSelected > 0) {
    toyCaseList = toysData.filter((item) => item.select === true)
  } else {
    toyCaseList = toysData.slice(0, 20);
  }

  const toyElements = toyCaseList.map((item, index) => 
  (<div key={index} className={`toy-case toy-${item.id}`}>
    <p className='toy-count'>{item.count}</p>
    <img className='toy-card-image' src={process.env.PUBLIC_URL + '/toys/' + item.id + '.png'} alt='toy'></img>
  </div>));

  const dispatch = useDispatch();
  return (
    <div className='toy-select'>      
      <h3>{Constants.SELECT_TOY}</h3>
      <div className='toy-box'> 
        {toyElements}
      </div>
    </div>
  );
}

export default ToySelect;