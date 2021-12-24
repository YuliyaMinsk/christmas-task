import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { treeState } from '../../../../abstract/types';
import { selectSnow } from '../../../../redux/actions-tree';
import treeReducer from '../../../../redux/reducer-tree';
import './Snow.scss';

function Snow() {

  const { settings } = useSelector((state: treeState) => state.treeReducer);
  
  const isActiveButtonSnow = (settings.snow) ? 'active' : '';

  const dispatch = useDispatch();

  return (
    <>      
      <button className={"button-snow " + isActiveButtonSnow} onClick={() => dispatch(selectSnow())}></button>
    </>
  );
}

export default Snow;